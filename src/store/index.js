import { createStore } from 'vuex';

export default createStore({
  state: {
    profile: {
      firstName: '',
      lastName: '',
      nickName: '',
      email: '',
      gender: '',
      country: '',
      language: '',
      profilePicture: '',
    },
    theme: localStorage.getItem('theme') || 'light',
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = { ...state.profile, ...payload };
    },
    setProfilePicture(state, profilePicture) {
      state.profile.profilePicture = profilePicture;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
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
    getProfile: (state) => state.profile,
    getFullName: (state) => `${state.profile.firstName} ${state.profile.lastName}`.trim(),
    getProfilePicture: (state) => state.profile.profilePicture,
  },
});
