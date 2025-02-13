import { createStore } from 'vuex';

export default createStore({
  state: {
    profile: {
      firstName: '',
      lastName: '',
      profilePicture: '', // This will hold the image URL
    },
    theme: localStorage.getItem('theme') || 'light', // Load from storage

  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    },
    setProfilePicture(state, profilePicture) {
      state.profile.profilePicture = profilePicture;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme); // Save to storage
    },
  },
  actions: {
    updateProfile({ commit }, profileData) {
      commit('setProfile', profileData);
    },
    updateProfilePicture({ commit }, profilePicture) {
      commit('setProfilePicture', profilePicture);
    },
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getProfilePicture(state) {
      return state.profile.profilePicture;
    },
    getFullName(state) {
      return `${state.profile.firstName} ${state.profile.lastName}`;
    },
  },
});
