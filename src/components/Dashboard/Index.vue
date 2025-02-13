<template>
  <div class="min-h-screen py-16 lg:px-4" :class="theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-neutral'">
    
    <!-- Navbar -->
    <nav class="fixed top-0 left-64 right-0 h-16 hidden lg:flex justify-between items-center px-6 shadow-md"
      :class="theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-black'">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <router-link to="/bio" class="flex items-center space-x-4">
        <img :src="userProfile.profilePicture" class="h-10 w-10 rounded-full object-cover" alt="User Avatar" />
        <span class="text-sm font-semibold">{{ fullName }}</span>
      </router-link>
    </nav>

    <!-- Main Dashboard Content -->
    <div class="max-w-5xl mx-auto px-6 pt-10 transition-colors duration-300">
      <!-- Welcome Message -->
      <h1 class="text-3xl font-bold mb-6">Welcome, {{ fullName }}!</h1>

      <!-- Dashboard Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Total Reports -->
        <router-link to="/my-reports" class="block">
          <div class="flex justify-between items-center p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
            :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-primary text-white'">
            <div>
              <p class="font-semibold">Total Reports</p>
              <h2 class="text-2xl">{{ totalReports }}</h2>
            </div>
            <i class="ri-file-list-line text-3xl"></i>
          </div>
        </router-link>

        <!-- Resolved Reports -->
        <div class="flex justify-between items-center p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-secondary text-white'">
          <div>
            <p class="font-semibold">Resolved Reports</p>
            <h2 class="text-2xl">{{ resolvedReports }}</h2>
          </div>
          <i class="ri-check-line text-3xl"></i>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        <router-link to="/leaderboard"
          class="flex items-center gap-2 p-4 rounded-lg shadow-md transition hover:bg-opacity-80"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-accent text-white'">
          <i class="ri-trophy-line text-2xl"></i> Leaderboard
        </router-link>
        <router-link to="/bio"
          class="flex items-center gap-2 p-4 rounded-lg shadow-md transition hover:bg-opacity-80"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-primary text-white'">
          <i class="ri-user-line text-2xl"></i> My Profile
        </router-link>
        <router-link to="/report-form"
          class="flex items-center gap-2 p-4 rounded-lg shadow-md transition hover:bg-opacity-80"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-secondary text-white'">
          <i class="ri-file-edit-line text-2xl"></i> Report Form
        </router-link>
        <router-link to="/service"
          class="flex items-center gap-2 p-4 rounded-lg shadow-md transition hover:bg-opacity-80"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-accent text-white'">
          <i class="ri-customer-service-2-line text-2xl"></i> Service Requests
        </router-link>
      </div>

      <!-- Notifications -->
      <div class="mt-8">
        <p class="font-semibold mb-2">Notifications</p>
        <div class="p-4 rounded-lg shadow-sm mb-2"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-neutral text-black'">
          <p><i class="ri-chat-1-line mr-2"></i> New message received</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { mapState, useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme); // Vuex theme state
    return { theme };
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.profile,
      totalReports: (state) => state.totalReports,
      resolvedReports: (state) => state.resolvedReports,
    }),
    fullName() {
      return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
    },
  },
};
</script>
