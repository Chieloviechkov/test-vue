import { createStore } from 'vuex';

const store = createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    login({ commit }) {
      commit('SET_AUTHENTICATED', true);
      localStorage.setItem('isAuthenticated', true);
    },
    logout({ commit }) {
      commit('SET_AUTHENTICATED', false);
      localStorage.setItem('isAuthenticated', 'false');

    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
});

export default store;
