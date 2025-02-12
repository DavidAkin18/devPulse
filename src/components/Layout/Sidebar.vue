<template>
    <aside :class="{'bg-gray-900 text-white': isDarkMode, 'bg-white text-black': !isDarkMode}"
           class="fixed left-0 top-0 h-screen w-64 p-5 flex flex-col shadow-md transition-all">
      
      <!-- Logo -->
      <div class="mb-10 flex items-center space-x-2">
        <img v-if="isDarkMode" src="../assets/images/darkLogo.png" class="h-10" alt="Logo">
        <img v-else src="../assets/images/lightLogo.png" class="h-10" alt="Logo">
        <span class="text-xl font-bold"></span>
      </div>
  
      <!-- Sidebar Links -->
      <nav class="flex-grow">
       <router-link to="/dashboard" class="sidebar-link" :class="{'active': isActive('/dashboard')}">
            <i class="ri-dashboard-line"></i> Dashboard
        </router-link>

        <router-link to="/vulnerability" class="sidebar-link" :class="{'active': isActive('/vulnerability')}">
            <i class="ri-file-text-line"></i> Vulnerability Reporting
        </router-link>

        <router-link to="/management" class="sidebar-link" :class="{'active': isActive('/management')}">
            <i class="ri-file-list-3-line"></i> Report Management
        </router-link>

        <router-link to="/bounty" class="sidebar-link" :class="{'active': isActive('/bounty')}">
            <i class="ri-wallet-line"></i> Bounty & Payment System
        </router-link>

        <router-link to="/community" class="sidebar-link" :class="{'active': isActive('/community')}">
            <i class="ri-community-line"></i> Community
        </router-link>

        <router-link to="/analytics" class="sidebar-link" :class="{'active': isActive('/analytics')}">
            <i class="ri-bar-chart-line"></i> Analytics & Reporting
        </router-link>

        <router-link to="/settings" class="sidebar-link" :class="{'active': isActive('/settings')}">
          <i class="ri-settings-3-line"></i> Settings
        </router-link>
      </nav>
  
      <!-- Sign Out -->
      <router-link to="/login" class="sidebar-link text-red-500">
        <i class="ri-logout-box-line"></i> Sign Out
      </router-link>
    </aside>
  </template>
  
  <script>
  export default {
    props: {
      isDarkMode: Boolean,
    },
    methods: {
      isActive(route) {
        return this.$route.path === route;
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar-link {
    display: flex;
    align-items: center;
    padding: 12px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s;
  }
  
  .sidebar-link i {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  .sidebar-link:hover, .sidebar-link.active {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  .dark .sidebar-link.active {
    background-color: rgba(250, 204, 21, 0.2);
    color: #facc15;
  }
  </style>
  