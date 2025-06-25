// Configurações globais
const CONFIG = {
  ENDPOINT: "https://script.google.com/macros/s/AKfycbwgvaJJX3QYDrfrz55QHp-GWcO85J672Eo9D__UIi5SDAbJ6BgHTyEm_kHgl2uynejTOg/exec",
  CACHE_TIME: 300000 // 5 minutos de cache
};

// Estado da aplicação
const state = {
  equipamentos: [],
  filteredEquipamentos: [],
  selectedEquipamento: null,
  lastFetch: 0
};

// Inicialização
function initApp() {
  setupEventListeners();
  loadEquipamentos();
  updateClock();
  setInterval(updateClock, 1000);
}

// [Todas as outras funções otimizadas...]

// Exportar para uso no HTML (se estiver usando como módulo)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { initApp };
} else {
  window.App = { initApp };
}