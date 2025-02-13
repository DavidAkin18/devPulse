<template>
  <div class="w-full fixed top-0 z-50">
    <div class="flex justify-between shadow-md items-center px-6 py-3"
    :class="theme === 'dark' ? ' bg-gray-900 text-neutral' : 'bg-white text-secondary'"
    >
      <h1 class="text-3xl font-bold " 
      :class="theme === 'dark' ? 'text-white' : 'text-primary'"
      >
        Dev<span :class="theme === 'dark' ? 'text-secondary' : 'text-accent'">Pulse</span>
      </h1>
      <!-- Hamburger Icon -->
      <button @click="isOpen = true" class="text-2xl p-2 focus:outline-none">
        <i class="ri-menu-line"
        :class="theme === 'dark' ? 'text-neutral' : 'text-primary'"
        ></i>
      </button>
    </div>

    <!-- Sidebar Drawer -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 z-50">
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="isOpen = false"></div>

        <!-- Sidebar -->
        <aside 
          class="fixed top-0 left-0 h-screen w-72 shadow-lg p-6 z-50 flex flex-col transition-all"
          :class="theme === 'dark' ? 'bg-gray-800 text-neutral' : 'bg-white text-black'"
        >
          <!-- Close Button -->
          <button @click="isOpen = false" class="absolute top-4 right-4 text-xl">
            <i class="ri-close-line"
            :class="theme === 'dark' ? 'text-neutral' : 'text-primary'"
            ></i>
          </button>

          <!-- User Info -->
          <div class="flex items-center space-x-3 mb-8">
            <img
              :src="userProfile.profilePicture "
              class="h-10 w-10 rounded-full object-cover"
              alt="User Avatar"
            />
            <span class="text-lg font-semibold">{{ fullName }}</span>
            <button 
              @click="$emit('toggle-theme')" 
              class="px-2 rounded transition-colors duration-200"
              :class="theme === 'dark' ? 'text-neutral hover:text-accent' : 'text-primary hover:text-accent'"
            >
              <i v-if="theme === 'dark'" class="ri-sun-fill text-lg"></i>
              <i v-else class="ri-moon-fill text-lg"></i>
            </button>
          </div>

          <!-- Sidebar Content -->
          <div class="flex flex-col flex-grow">
            <!-- Section Title -->
            <h2 class="uppercase text-sm mb-4"
            :class="theme === 'dark' ? 'text-neutral' : 'text-gray-500'">DevPulse Tools</h2>

            <!-- Navigation Links -->
            <nav class="space-y-3">
              <router-link 
                v-for="link in links" 
                :key="link.path"
                :to="link.path" 
                class="mobile-link"
                @click="isOpen = false"
                :class="{
                  'bg-neutral text-accent dark:bg-gray-300 dark:text-secondary': $route.path === link.path,
                  'hover:bg-neutral text-accent dark:text-secondary': $route.path !== link.path
                }"
              >
                <i :class="link.icon" class="mr-3 text-xl"></i>
                {{ link.label }}
              </router-link>
            </nav>
          </div>

          <!-- Sign Out (Pushed to Bottom) -->
          <router-link to="/login" class="mobile-link text-red-500 mt-auto hover:bg-red-600 hover:text-white">
            <i class="ri-logout-box-line"></i> Sign Out
          </router-link>
          
        </aside>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      links: [
        { path: "/dashboard", label: "Dashboard", icon: "ri-home-line" },
        { path: "/vulnerability", label: "Services", icon: "ri-file-text-line" },
        { path: "/management", label: "Report Management", icon: "ri-file-list-3-line" },
        { path: "/bounty", label: "Bounty & Payment System", icon: "ri-wallet-line" },
        { path: "/community", label: "Community", icon: "ri-community-line" },
        { path: "/analytics", label: "Analytics & Reporting", icon: "ri-bar-chart-line" }
      ]
    };
  },
  computed: {
    ...mapState({
      userProfile: state => state.profile,
    }),
    fullName() {
      return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
    },
  },
};
</script>

<style scoped>
/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

/* Mobile Link Styles */
.mobile-link {
  @apply flex items-center gap-3 px-4 py-2 text-lg font-medium rounded-lg transition-all;
}

/* Default (light mode) styles */
.mobile-link {
  @apply text-primary;
}
.mobile-link:hover {
  @apply bg-secondary text-white;
}

/* Dark mode styles */
.dark .mobile-link {
  @apply text-white;
}
.dark .mobile-link:hover {
  @apply bg-secondary text-white;
}

/* Active link styles */
.mobile-link.router-link-exact-active {
  @apply bg-neutral text-accent dark:bg-gray-300;
}
</style>
