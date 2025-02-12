<template>
    <div>
      <div class="flex justify-between items-center px-6">
        <img src="../assets/images/lightLogo.png" class="w-16 h-10" alt="logo">
        <!-- Hamburger Icon (Opens Sidebar) -->
        <button @click="isOpen = true" class="text-2xl p-2 focus:outline-none ">
            <i class="ri-menu-line"></i>
        </button>
      </div>
  
      <!-- Sidebar Drawer -->
      <transition name="slide">
        <div v-if="isOpen" class="fixed inset-0 z-50">
          <!-- Background Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-50" @click="isOpen = false"></div>
  
          <!-- Sidebar -->
          <aside class="fixed top-0 left-0 h-screen w-72 bg-white shadow-lg p-6 z-50 flex flex-col">
            
            <!-- Close Button -->
            <button @click="isOpen = false" class="absolute top-4 right-4 text-xl">
              <i class="ri-close-line"></i>
            </button>
  
            <!-- User Info -->
            <div class="flex items-center space-x-3 mb-8">
              <i class="ri-user-line text-3xl text-gray-500"></i>
              <span class="text-lg font-semibold">Akintola</span>
            </div>
  
            <!-- Sidebar Content -->
            <div class="flex flex-col flex-grow">
              <!-- Section Title -->
              <h2 class="text-gray-500 uppercase text-sm mb-4">Hackers Tools</h2>
  
              <!-- Navigation Links -->
              <nav class="space-y-3">
                <router-link to="/dashboard" class="mobile-link" exact-active-class="active">
                  <i class="ri-home-line"></i> Dashboard
                </router-link>
              
                <router-link to="/vulnerability" class="mobile-link">
                  <i class="ri-file-text-line"></i> Vulnerability Reporting
                </router-link>
  
                <router-link to="/management" class="mobile-link">
                  <i class="ri-file-list-3-line"></i> Report Management
                </router-link>
  
                <router-link to="/bounty" class="mobile-link">
                  <i class="ri-wallet-line"></i> Bounty & Payment System
                </router-link>
  
                <router-link to="/community" class="mobile-link">
                  <i class="ri-community-line"></i> Community
                </router-link>
  
                <router-link to="/analytics" class="mobile-link">
                  <i class="ri-bar-chart-line"></i> Analytics & Reporting
                </router-link>
              </nav>
            </div>
  
            <!-- Sign Out (Pushed to Bottom) -->
            <router-link to="/login" class="mobile-link text-red-500 mt-auto">
              <i class="ri-logout-box-line"></i> Sign Out
            </router-link>
            
          </aside>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    }
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
  
  .mobile-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #4b5563;
    transition: all 0.3s;
    border-radius: 6px;
  }
  
  .mobile-link:hover, .mobile-link.active {
    background-color: rgba(99, 102, 241, 0.1);
    color: #6366f1;
  }
  .text-red-500 {
    color:red;
  }
  </style>
  