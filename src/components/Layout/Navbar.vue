<template>
  <nav 
    class="py-6 px-4 md:px-16 w-full shadow-lg z-50 fixed top-0 flex justify-between items-center transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-primary text-white'"
  >
    <!-- Logo -->
    <h1 class="text-2xl font-bold">DevPulse</h1>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-6">
      <li>
        <button 
          @click="$emit('toggle-theme')" 
          class="px-2 rounded transition-colors duration-200"
          :class="theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-accent hover:bg-gray-500'"
        >
          <i v-if="theme === 'dark'" class="ri-sun-fill text-lg"></i>
          <i v-else class="ri-moon-fill text-lg"></i>
        </button>
      </li>
      <li>
        <router-link to="/" 
          class="py-2 px-3 rounded-lg font-bold transition-colors duration-200"
          :class="theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-secondary'"
        >
          {{ homePage }}
        </router-link>
      </li>
      <li>
        <router-link to="/login"
          class="font-bold transition-colors duration-200"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          Login
        </router-link>
      </li>
      <li>
        <router-link to="/register"
          class="py-2 px-3 rounded-lg font-bold transition-colors duration-200"
          :class="theme === 'dark' ? 'bg-accent hover:bg-gray-600' : 'bg-accent hover:bg-secondary'"
        >
          Sign up
        </router-link>
      </li>
      
    </ul>

    <!-- Mobile Menu Icon -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <i class="ri-menu-3-line text-3xl"></i>
    </button>

    <!-- Mobile Sidebar -->
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMenu"></div>

    <div
      class="fixed top-0 right-0 w-full h-48 pt-4 shadow-lg rounded-xl transform transition-transform duration-300 ease-in-out z-50"
      :class="[isOpen ? 'translate-y-0 mt-24' : '-translate-y-full', theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-primary text-white']"
    >
    
      <button @click="closeMenu" class="absolute top-4 right-4 text-3xl focus:outline-none">
        <i class="ri-close-line"></i>
      </button>

      <ul class="space-y-4 text-center ">
        <li>
          <button 
            @click="$emit('toggle-theme')" 
            class="px-2 rounded transition-colors duration-200"
            :class="theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-accent hover:bg-gray-500'"
          >
            <i v-if="theme === 'dark'" class="ri-sun-fill text-lg"></i>
            <i v-else class="ri-moon-fill text-lg"></i>
          </button>
        </li>
        <li>
          <router-link to="/" @click="closeMenu"
            class="py-2 px-3 rounded-lg font-bold transition-colors duration-200"
            :class="theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-secondary'"
          >
            {{ homePage }}
          </router-link>
        </li>
        <li>
          <router-link to="/login" @click="closeMenu"
            class="font-bold transition-colors duration-200"
            :class="theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-secondary'"
          >
            Login
          </router-link>
        </li>
        <li>
          <router-link to="/register" @click="closeMenu"
            class="py-3 px-12 rounded-lg font-bold transition-colors duration-200"
            :class="theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-accent hover:bg-secondary'"
          >
            Register
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    homePage: {
      type: String,
      required: true,
    },
    beneficiaryData: {
      type: Object,
      required: false,
      default: () => {},
    },
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* No extra styles needed since Tailwind handles everything */
</style>
