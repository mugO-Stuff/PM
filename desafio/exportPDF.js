// Função para exportar checklist em PDF (usando jsPDF)
// Necessário incluir jsPDF via CDN no HTML
function exportChecklistPDF(state, profile) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('jsPDF não carregado.');
    return;
  }
  const doc = new window.jspdf.jsPDF();
  doc.setFont('helvetica');
  doc.setFontSize(16);
  doc.text('Checklist de Documentos', 10, 15);
  doc.setFontSize(11);
  let y = 25;
  doc.text('Perfil:', 10, y);
  y += 6;
  Object.entries(profile).forEach(([k, v]) => {
    doc.text(`- ${k}: ${v ? 'Sim' : 'Não'}`, 12, y);
    y += 5;
  });
  y += 2;
  doc.text('Documentos:', 10, y);
  y += 6;
  state.forEach(item => {
    doc.setFont(undefined, item.done ? 'bold' : 'normal');
    doc.text(`${item.done ? '✔️' : '❌'} ${item.title}`, 12, y);
    y += 6;
    if (item.obs) {
      doc.setFontSize(10);
      doc.text(`Obs: ${item.obs}`, 16, y);
      y += 5;
      doc.setFontSize(11);
    }
    if (item.prazo) {
      doc.text(`Prazo: ${item.prazo}`, 16, y);
      y += 5;
    }
    if (item.urgente) {
      doc.text('URGENTE', 16, y);
      y += 5;
    }
    if (item.concluidoEm) {
      doc.text(`Concluído em: ${item.concluidoEm}`, 16, y);
      y += 5;
    }
    y += 2;
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
  });
  y += 4;
  doc.setFontSize(12);
  doc.text(`Progresso: ${state.filter(i=>i.done).length} de ${state.length} concluídos`, 10, y);
  doc.save('checklist-documentos.pdf');
}
