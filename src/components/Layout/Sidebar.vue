<template>
  <aside 
    :class="theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'"
    class="fixed left-0 top-0 h-screen w-64 p-5 flex flex-col shadow-md transition-all border-r"
  >
    <!-- Logo & Theme Toggle -->
    <div class="mb-10 flex items-center justify-between space-x-2">
      <img v-if="theme === 'dark'" src="https://res.cloudinary.com/def9quyti/image/upload/v1740134728/DevPulse_Logo_Mono-white_1_vrq3gj.png" 
          class="h-10"
          alt="light-mode-logo"
        >
      <img src="https://res.cloudinary.com/def9quyti/image/upload/v1740134713/DevPulse_Logo_color2_gnhfag.png" 
        alt="dark-mode-logo" v-else
        class="h-10" >

       
      <button 
        @click="toggleTheme" 
        class="px-2 rounded transition-colors duration-200"
        :class="theme === 'dark' ? 'text-secondary'  : 'text-accent'"
      >
        <i v-if="theme === 'dark'" class="ri-sun-fill text-lg"></i>
        <i v-else class="ri-moon-fill text-lg"></i>
      </button>
    </div>

    <!-- Sidebar Links -->
    <nav class="flex-grow space-y-2">
      <router-link 
        v-for="link in links" 
        :key="link.path"
        :to="link.path" 
        class="flex items-center px-4 py-3 text-lg font-medium rounded-lg transition duration-300"
        :class="{
          'bg-accent text-white': isActive(link.path) && theme !== 'dark', // Light mode: active bg accent, text white
          'text-accent': !isActive(link.path) && theme !== 'dark', // Light mode: inactive text accent
          'bg-accent dark:bg-secondary text-white': isActive(link.path) && theme === 'dark', // Dark mode: active bg secondary, text white
          'hover:bg-neutral': !isActive(link.path), // Hover effect for all themes
        }"
      >
        <i :class="link.icon" class="mr-3 text-xl"></i>
        {{ link.label }}
      </router-link>
    </nav>



    <!-- Sign Out -->
    <router-link 
      to="/login" 
      class="flex items-center px-4 py-3 text-lg font-medium rounded-lg text-red-500 hover:text-red-100 dark:hover:text-red-900 transition duration-300"
    >
      <i class="ri-logout-box-line mr-3 text-xl"></i> Sign Out
    </router-link>
  </aside>
</template>

<script>
import { useStore } from 'vuex';
import store from '../../store';
import { computed } from 'vue';

export default {
  props: {
    theme: String,
  },
  setup(props, { emit }) {
    const store = useStore();
    const theme = computed(() => store.state.theme);

    function toggleTheme() {
      store.commit("toggleTheme");
      document.documentElement.className = store.state.theme;
    }

    return { theme, toggleTheme };
  },
  data() {
    return {
      links: [
        { path: "/dashboard", label: "Dashboard", icon: "ri-dashboard-line" },
        // { path: "/services", label: "Services", icon: "ri-service-fill" },
        { path: "/careers", label: "Career", icon: "ri-id-card-fill" },
        { path: "/resources", label: "Resources", icon: "ri-database-line" },
        { path: "/bio", label: "Profile", icon: "ri-settings-line" },
      ]
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    toggleTheme(){
      store.commit("toggleTheme");
      document.documentElement.className = store.state.theme;
    }
  }
};
</script>
