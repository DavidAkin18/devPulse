<template>
  <div class="" :class="theme">
    <!-- Sidebar (Only for non-auth pages & desktop view) -->
    <Sidebar v-if="!isMobile && !isAuthPage" :theme="theme" @toggle-theme="toggleTheme" class="w-64 fixed left-0 top-0 h-full shadow-lg" />

    <!-- Main Content -->
    <div class="main-content transition-all duration-300" :style="{ paddingLeft: isAuthPage || isMobile ? '0' : '250px' }">
      <!-- Mobile Sidebar (Only for non-auth pages & mobile view) -->
      <MobileSidebar v-if="isMobile && !isAuthPage" 
        :isOpen="isMobileMenuOpen" 
        @close="isMobileMenuOpen = false" 
        :theme="theme" 
        @toggle-theme="toggleTheme"
      />
      <!-- Router View -->
      <router-view :theme="theme" @toggle-theme="toggleTheme" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Sidebar from "../src/components/Layout/Sidebar.vue";
import MobileSidebar from "../src/components/Layout/MobileSidebar.vue";

export default {
  components: { Sidebar, MobileSidebar },
  setup() {
    const store = useStore();
    const route = useRoute();
    const isMobile = ref(window.innerWidth <= 768);
    const isMobileMenuOpen = ref(false);

    // Computed theme from Vuex
    const theme = computed(() => store.state.theme);

    // Authentication routes (hide sidebar & mobile sidebar here)
    const authPaths = ["/", "/register", "/login", "/forgot-password", "/about", "/bio"];
    const isAuthPage = computed(() => authPaths.includes(route.path));

    // Handle screen resize
    const checkScreenSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
      window.addEventListener("resize", checkScreenSize);
      document.documentElement.className = store.state.theme; // Apply theme globally on mount
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenSize);
    });

    return { theme, isMobile, isMobileMenuOpen, isAuthPage, store };
  },
  methods: {
    toggleTheme() {
      this.store.commit("toggleTheme");
      document.documentElement.className = this.store.state.theme; // Apply theme globally
    },
  },
};
</script>

<style scoped>
/* Sidebar transition */
@media (max-width: 768px) {
  .mobile-sidebar {
    transition: transform 0.3s ease-in-out;
  }
}
</style>
