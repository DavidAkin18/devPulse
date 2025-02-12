<template>
  <div class="app-container" :class="theme">
    <!-- Sidebar (Only for non-auth pages) -->
    <Sidebar v-if="!isMobile && !isAuthPage" />

    <!-- Main Content -->
    <div class="main-content" :style="{ paddingLeft: isAuthPage || isMobile ? '0' : '250px' }">
      <!-- Mobile Sidebar (Only for non-auth pages) -->
      <MobileSidebar v-if="isMobile && !isAuthPage" :isOpen="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "../src/components/Layout/Sidebar.vue";
import MobileSidebar from "../src/components/Layout/MobileSidebar.vue";

export default {
  components: { Sidebar, MobileSidebar },
  setup() {
    const isMobile = ref(window.innerWidth <= 768);
    const isMobileMenuOpen = ref(false);
    const route = useRoute();

    // Authentication routes (hide sidebar & mobile sidebar here)
    const authPaths = ["/", "/register", "/login", "/forgot-password", "/about", 
    "/careers", "/comprehensive-services"];

    // Check if the current route is an auth page
    const isAuthPage = computed(() => authPaths.includes(route.path));

    // Handle screen resize
    const checkScreenSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    // Add event listener
    onMounted(() => {
      window.addEventListener("resize", checkScreenSize);
    });

    // Remove event listener on unmount
    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenSize);
    });

    return { isMobile, isMobileMenuOpen, isAuthPage };
  },
  data() {
    return {
      theme: this.getSavedTheme() || "light", // Load theme from localStorage
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      this.saveTheme(this.theme);
      document.documentElement.className = this.theme; // Apply theme globally
    },
    getSavedTheme() {
      return localStorage.getItem("theme") || "light";
    },
    saveTheme(theme) {
      localStorage.setItem("theme", theme);
    },
  },
  mounted() {
    document.documentElement.className = this.theme; // Ensure theme is applied on load
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
}

.main-content {
  flex-grow: 1;
  transition: padding-left 0.3s ease;
}

/* Responsive: Hide Sidebar on Mobile */
@media (max-width: 768px) {
  .main-content {
    padding-left: 0;
  }
}
</style>
