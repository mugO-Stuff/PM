// Botão fixo de resetar app (voltar ao questionário inicial)
const resetAppBtn = document.getElementById('reset-app-btn');
function showResetAppBtn(show) {
  if (resetAppBtn) resetAppBtn.style.display = show ? 'block' : 'none';
}
if (resetAppBtn) {
  resetAppBtn.addEventListener('click', () => {
    if (confirm('Deseja realmente resetar o app e responder o questionário novamente? Todo o progresso será apagado.')) {
      localStorage.clear();
      location.reload();
    }
  });
}
// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registrado com sucesso:', reg))
      .catch(err => console.error('Erro ao registrar Service Worker:', err));
  });
}
// Documentos opcionais - abrir/fechar modal
const showOptionalBtn = document.getElementById('show-optional-btn');
const optionalModal = document.getElementById('optional-modal');
const optionalClose = document.getElementById('optional-close');
if (showOptionalBtn && optionalModal && optionalClose) {
  showOptionalBtn.addEventListener('click', () => {
    optionalModal.style.display = 'flex';
  });
  optionalClose.addEventListener('click', () => {
    optionalModal.style.display = 'none';
  });
  optionalModal.addEventListener('click', (e) => {
    if (e.target === optionalModal) optionalModal.style.display = 'none';
  });
}
document.addEventListener('DOMContentLoaded', initApp);
function loadProfile() {
  const saved = localStorage.getItem(PROFILE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch {}
  }
  return null;
}

// Checklist de Documentos Premium Gamificado
// Usa dados de profileData.js
const STORAGE_KEY = 'checklist_docs_v3';
const PROFILE_KEY = 'checklist_profile_v1';

let optionalDocs = [];
let profile = null;
let state = [];

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

function getInitialState(profile) {
  // Filtra documentos conforme perfil
  return DOCS.filter(doc => !doc.cond || doc.cond(profile)).map(doc => ({
    ...doc,
    done: false,
    obs: '',
    progressing: false,
    prazo: '',
    urgente: false,
    concluidoEm: null
  }));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    // Retorna [obrigatórios, opcionais]
    function splitDocsByProfile(profile) {
      const obrig = [], opc = [];
      DOCS.forEach(doc => {
        if (doc.cond && doc.cond(profile)) obrig.push(doc);
        else if (doc.cond) opc.push(doc);
        else obrig.push(doc); // docs sem cond são sempre obrigatórios
      });
      return [obrig, opc];
    }

    try { return JSON.parse(saved); } catch {}
  }
  return null;
}

// Perguntas condicionais
function renderProfileQuestions() {
  const section = document.getElementById('profile-questions-section');
  const list = document.getElementById('profile-questions-list');
  list.innerHTML = '';
  PROFILE_QUESTIONS.forEach(q => {
    const div = document.createElement('div');
    div.className = 'profile-question';
    const label = document.createElement('label');
    label.textContent = q.question;
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = q.key;
    input.id = 'profile-' + q.key;
    div.appendChild(label);
    div.appendChild(input);
    list.appendChild(div);
  });
  section.style.display = 'block';
  document.getElementById('main-app').style.display = 'none';
}

function handleProfileSubmit(e) {
  e.preventDefault();
  profile = {};
  PROFILE_QUESTIONS.forEach(q => {
    profile[q.key] = document.getElementById('profile-' + q.key).checked;
  });
  saveProfile();
  state = getInitialState(profile);
  saveState();
  document.getElementById('profile-questions-section').style.display = 'none';
  document.getElementById('main-app').style.display = 'block';
  renderAll();
}

// Inicialização condicional
function initApp() {
  profile = loadProfile();
  if (!profile) {
    renderProfileQuestions();
    document.getElementById('profile-questions-form').onsubmit = handleProfileSubmit;
    showResetAppBtn(false);
    return;
  }
  state = loadState();
  if (!state) {
    state = getInitialState(profile);
    saveState();
  }
  document.getElementById('profile-questions-section').style.display = 'none';
  document.getElementById('main-app').style.display = 'block';
  showResetAppBtn(true);
  renderAll();
}

function getProgress() {
  const total = state.length;
  const done = state.filter(d => d.done).length;
  const percent = Math.round((done / total) * 100);
  return { total, done, percent };
}

function motivationalMessage(percent) {
  if (percent === 100) return 'Checklist concluído! Parabéns!';
  if (percent >= 90) return 'Missão quase completa!';
  if (percent >= 70) return 'Falta pouco para finalizar!';
  if (percent >= 40) return 'Você já concluiu ' + percent + '%! Continue!';
  if (percent > 0) return 'Ótimo começo! Siga em frente!';
  return 'Comece sua missão!';
}

function renderDashboard() {
  const dashTotal = document.getElementById('dash-total');
  const dashPending = document.getElementById('dash-pending');
  const dashDone = document.getElementById('dash-done');
  const dashNextList = document.getElementById('dash-next-list');
  const { total, done } = getProgress();
  dashTotal.textContent = total;
  dashDone.textContent = done;
  dashPending.textContent = total - done;
  // Próximos importantes: pendentes de prioridade alta/média
  dashNextList.innerHTML = '';
  state.forEach((doc, idx) => {
    if (!doc.done && (DOCS[idx].priority === 'alta' || DOCS[idx].priority === 'media')) {
      const li = document.createElement('li');
      li.textContent = doc.title;
      dashNextList.appendChild(li);
    }
  });
}

function renderProgressBar() {
  const { total, done, percent } = getProgress();
  document.getElementById('progress-count').textContent = `${done} de ${total} documentos concluídos`;
  document.getElementById('progress-percent').textContent = percent + '%';
  const bar = document.getElementById('progress-bar');
  bar.style.width = percent + '%';
}

function renderMotivation() {
  const { percent } = getProgress();
  document.getElementById('motivational-message').textContent = motivationalMessage(percent);
}

function renderLists() {
  const pendingList = document.getElementById('pending-list');
  const progressingList = document.getElementById('progressing-list');
  const completedList = document.getElementById('completed-list');
  pendingList.innerHTML = '';
  progressingList.innerHTML = '';
  completedList.innerHTML = '';

  state.forEach((doc, idx) => {
    const docData = DOCS[idx];
    const li = document.createElement('li');
    // Prioridade visual
    if (docData.priority === 'alta') li.classList.add('priority-high');
    else if (docData.priority === 'media') li.classList.add('priority-medium');
    else li.classList.add('priority-low');
    if (doc.done) li.classList.add('completed');
    if (doc.progressing && !doc.done) li.classList.add('progressing');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = !!doc.done;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        li.classList.add('conquered');
        setTimeout(() => li.classList.remove('conquered'), 700);
      }
      state[idx].done = checkbox.checked;
      if (checkbox.checked) state[idx].progressing = false;
      saveState();
      renderAll();
      // Troféu ao concluir tudo
      if (getProgress().percent === 100) showTrophy();
    });

    // Info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'doc-info';
    const title = document.createElement('div');
    title.className = 'doc-title';
    title.textContent = doc.title;
    // Prioridade badge
    const badge = document.createElement('span');
    badge.className = 'priority-badge';
    badge.textContent = docData.priority === 'alta' ? 'Alta' : docData.priority === 'media' ? 'Média' : 'Baixa';
    if (docData.priority === 'media') badge.style.background = 'var(--accent)';
    if (docData.priority === 'baixa') badge.style.background = 'var(--muted)';
    if (docData.priority === 'media') badge.style.color = '#7c4700';
    title.appendChild(badge);
    infoDiv.appendChild(title);

    // Botão info/modal
    const infoBtn = document.createElement('button');
    infoBtn.className = 'info-btn';
    infoBtn.title = 'Ver detalhes';
    infoBtn.innerHTML = 'ℹ️';
    infoBtn.addEventListener('click', () => showModal(doc.title, docData.details));
    infoDiv.appendChild(infoBtn);

    // Observação
    const obsInput = document.createElement('textarea');
    obsInput.className = 'obs-input';
    obsInput.placeholder = 'Adicionar observação...';
    obsInput.value = doc.obs || '';
    obsInput.addEventListener('input', () => {
      state[idx].obs = obsInput.value;
      saveState();
    });
    infoDiv.appendChild(obsInput);

    // Botão "Em andamento"
    if (!doc.done) {
      const progBtn = document.createElement('button');
      progBtn.className = 'info-btn';
      progBtn.title = 'Marcar como em andamento';
      progBtn.innerHTML = '⏳';
      progBtn.style.fontSize = '1.1em';
      progBtn.addEventListener('click', () => {
        state[idx].progressing = !state[idx].progressing;
        saveState();
        renderAll();
      });
      infoDiv.appendChild(progBtn);
    }

    li.appendChild(checkbox);
    li.appendChild(infoDiv);

    if (doc.done) completedList.appendChild(li);
    else if (doc.progressing) progressingList.appendChild(li);
    else pendingList.appendChild(li);
  });
}

function renderAll() {
  renderDashboard();
  renderProgressBar();
  renderMotivation();
  renderLists();
}

// Modal de detalhes
function showModal(doc, docData) {
  document.getElementById('modal-title').textContent = doc.title;
  // Busca info centralizada
  const linkInfo = documentLinks[doc.key] || {};
  let html = `<div style='margin-bottom:0.7em;'>${docData.details || linkInfo.obs || ''}</div>`;
  html += `<div><b>Onde emitir:</b> ${linkInfo.local || docData.ondeEmitir || '-'}</div>`;
  if (linkInfo.link) {
    html += `<div style='margin-top:0.7em;'><a href='${linkInfo.link}' target='_blank' class='official-link-btn'>🌐 Acessar site oficial</a></div>`;
  } else {
    html += `<div style='margin-top:0.7em;'><span class='no-link-info'>Emissão presencial ou consulte o órgão responsável.</span></div>`;
  }
  if (linkInfo.obs) html += `<div style='margin-top:0.7em;'><b>Observação:</b> ${linkInfo.obs}</div>`;
  if (doc.obs) html += `<div style='margin-top:0.7em;'><b>Sua observação:</b> ${doc.obs}</div>`;
  if (doc.prazo) html += `<div><b>Prazo:</b> ${doc.prazo}</div>`;
  if (doc.urgente) html += `<div style='color:var(--danger);'><b>URGENTE</b></div>`;
  if (doc.concluidoEm) html += `<div class='concluido-em'><b>Concluído em:</b> ${doc.concluidoEm}</div>`;
  document.getElementById('modal-details').innerHTML = html;
  document.getElementById('modal-bg').style.display = 'flex';
}
document.getElementById('modal-close').onclick = () => {
  document.getElementById('modal-bg').style.display = 'none';
};
document.getElementById('modal-bg').onclick = (e) => {
  if (e.target.id === 'modal-bg') document.getElementById('modal-bg').style.display = 'none';
};

// Troféu gamificado
// Sistema de níveis gamificados
function renderLevel() {
  const { percent } = getProgress();
  const level = getLevel(percent);
  const badge = document.getElementById('level-badge');
  badge.innerHTML = `<span class='level-icon'>${level.icon}</span> <span style='color:${level.color}'>${level.name}</span> <span style='font-size:0.95em;color:var(--muted);'>${percent}%</span>`;
}

// Tela final especial
function showMissionComplete() {
  const mission = document.getElementById('mission-complete');
  const summary = document.getElementById('mission-summary');
  const total = state.length;
  const concluido = state.filter(i=>i.done).length;
  const data = new Date().toLocaleString();
  let html = `<div style='margin-bottom:0.7em;'>Você concluiu <b>${concluido} de ${total}</b> documentos!</div>`;
  html += `<div>Data de finalização: <b>${data}</b></div>`;
  summary.innerHTML = html;
  mission.style.display = 'flex';
  setTimeout(() => { mission.style.display = 'none'; }, 6000);
}

// Reset inteligente
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  if (confirm('Tem certeza que deseja resetar o checklist?')) {
    state = getInitialState(profile);
    saveState();
    renderAll();
  }
});

// Exportação PDF
const exportBtn = document.getElementById('export-pdf-btn');
exportBtn.addEventListener('click', () => {
  exportChecklistPDF(state, profile);
});

// Animação lembrete
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { color: var(--accent); }
  50% { color: var(--danger); }
  100% { color: var(--accent); }
}`;
document.head.appendChild(style);

// Inicializar
renderAll();
