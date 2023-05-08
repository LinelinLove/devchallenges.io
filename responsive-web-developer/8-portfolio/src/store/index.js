import { createStore } from 'vuex';
import json from '../assets/data.json';

export default createStore({
  state: {
    darkMode: localStorage.getItem('darkMode') === 'true', // Récupérer la valeur du mode sombre depuis le localStorage
    // darkMode: false,
    datas: json,
  },
  getters: {
  },
  mutations: {
    
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode); // Mettre à jour le localStorage avec la nouvelle valeur
      updateBodyClass(state.darkMode); // Appeler la fonction updateBodyClass en passant le mode sombre actuel
    },
  },

  actions: {
  },
  modules: {
  }
});

// Fonction pour mettre à jour la classe du corps (body)
function updateBodyClass(darkMode) {
  document.body.classList.toggle('dark', darkMode);
}

