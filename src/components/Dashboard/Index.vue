<template>
  <div class="min-h-screen"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-neutral'">
    
    <!-- Navbar -->
    <nav class=" h-16 flex justify-between items-center px-6 shadow-md"
      :class="theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-black'">
      <h1 class="text-xl font-semibold text-accent">Dashboard</h1>
      <router-link to="/bio" class="flex items-center space-x-4">
        <img :src="userProfile.profilePicture || defaultProfilePic" class="h-10 w-10 rounded-full object-cover" alt="User Avatar" />
        <span class="text-sm font-semibold">{{ fullName }}</span>
      </router-link>
    </nav>

    <!-- Welcome Banner -->
    <div class="bg-accent text-white p-6 rounded-lg shadow-lg mt-8 mx-4 flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold">Hi {{ nickName }} 👋</h2>
        <p class="text-sm">Enjoy a discount on every course you order! This offer is only valid for today.</p>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52gtrRy4f3HHRzkt201BypPqQdqxSbNrWkw&s" alt="Welcome Illustration" class="h-24 rounded-lg">
    </div>
    
    <!-- Quick Links -->
    <div class="max-w-5xl mx-auto px-6 pt-10">
      <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <router-link to="/my-reports" class="quick-link-card">
          <i class="ri-file-list-line text-3xl"></i>
          <span>My Reports</span>
        </router-link>
        <router-link to="/service" class="quick-link-card">
          <i class="ri-customer-service-2-line text-3xl"></i>
          <span>Service Requests</span>
        </router-link>
        <router-link to="/leaderboard" class="quick-link-card">
          <i class="ri-trophy-line text-3xl"></i>
          <span>Leaderboard</span>
        </router-link>
        <router-link to="/report-form" class="quick-link-card">
          <i class="ri-file-edit-line text-3xl"></i>
          <span>New Report</span>
        </router-link>
      </div>
    </div>
    
    <!-- Notifications Section -->
    <div class="max-w-5xl mx-auto px-6 mt-10">
      <h2 class="text-lg font-semibold mb-4">Notifications</h2>
      <div v-for="notification in notifications" :key="notification.id" class="p-4 rounded-lg shadow-sm mb-2"
        :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-neutral text-black'">
        <p><i class="ri-chat-1-line mr-2"></i> {{ notification.message }}</p>
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
    const theme = computed(() => store.state.theme);
    const userProfile = computed(() => store.state.profile);
    const notifications = computed(() => store.state.notifications || []);
    const nickName = computed(()=> store.state.profile.nickName)
    const fullName = computed(() => `${userProfile.value.firstName} ${userProfile.value.lastName}`);

    return { theme, userProfile, fullName,nickName, notifications };
  },
  data() {
    return {
      defaultProfilePic: 'https://res.cloudinary.com/def9quyti/image/upload/v1740141525/profile-avatar_p9w21j.jpg',
    };
  },
};
</script>

<style>
.quick-link-card {
  @apply flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-primary text-white transition hover:opacity-80;
}
</style>
