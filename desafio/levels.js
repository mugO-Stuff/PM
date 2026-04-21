// Sistema de níveis gamificados para progresso
const LEVELS = [
  { name: 'Recruta', min: 0, color: '#64748b', icon: '🟦' },
  { name: 'Soldado', min: 15, color: '#2563eb', icon: '🟦' },
  { name: 'Cabo', min: 35, color: '#fbbf24', icon: '🟨' },
  { name: 'Sargento', min: 60, color: '#22c55e', icon: '🟩' },
  { name: 'Oficial', min: 85, color: '#a21caf', icon: '🟪' },
  { name: 'Missão Concluída', min: 100, color: '#f59e42', icon: '🏅' }
];

function getLevel(percent) {
  let level = LEVELS[0];
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (percent >= LEVELS[i].min) {
      level = LEVELS[i];
      break;
    }
  }
  return level;
}
