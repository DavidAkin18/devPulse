<template>
  <nav 
    class="py-6 px-4 md:px-16 w-full shadow-lg z-50 fixed top-0 flex justify-between items-center transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-primary text-white'"
  >
    <!-- Logo -->
    <img src="https://res.cloudinary.com/def9quyti/image/upload/v1740134713/DevPulse_Logo_color2_gnhfag.png" 
    alt="dark-mode-logo" v-if="theme === 'dark'"
    class="h-10" >

    <img v-else src="https://res.cloudinary.com/def9quyti/image/upload/v1740134728/DevPulse_Logo_Mono-white_1_vrq3gj.png" 
      class="h-10"
      alt="light-mode-logo"
    >
    
    <h1 class="text-2xl font-bold"></h1>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-10">
      
      <li>
        <router-link to="/"
           class="font-base transition-colors duration-200"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/services"
           class="font-base transition-colors duration-200"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          services
        </router-link>
      </li>
      <li>
        <router-link to="/about"
           class="font-base transition-colors duration-200"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          About Us
        </router-link>
      </li>

      <li>
        <router-link to="/register"
          class="py-2 px-4 rounded-md font-base transition-colors duration-200"
          :class="theme === 'dark' ? 'bg-accent hover:bg-gray-600' : 'bg-accent hover:bg-secondary'"
        >
          Get Started
        </router-link>
      </li>
      <li>
        <button 
          @click="$emit('toggle-theme')" 
          class="px-2 rounded transition-colors duration-200"
          :class="theme === 'dark' ? 'text-gray-700 hover:text-gray-600' : 'text-accent hover:text-gray-500'"
        >
          <i v-if="theme === 'dark'" class="ri-sun-fill text-lg text-yellow-400"></i>
          <i v-else class="ri-moon-fill text-lg"></i>
        </button>
      </li>
    </ul>



    <!-- Mobile Menu Icon -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <i class="ri-menu-3-line text-3xl"></i>
    </button>

    <!-- Mobile Sidebar -->
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMenu"></div>

    <div
  class="fixed top-0 right-0 h-full w-3/5 pt-4 rounded-l-md transform transition-transform duration-300 ease-in-out z-50"
  :class="[
    isOpen ? 'translate-x-0' : 'translate-x-full',
    theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-secondary',
    theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-secondary'
  ]"
>

    <button @click="closeMenu" class="absolute  top-4 right-4 text-3xl focus:outline-none"
    :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
    >
      <i class="ri-close-line"></i>
    </button>

    <ul class="space-y-4 text-left px-4 mt-12">
      <li>
        <router-link to="/"
           class="font-bold transition-colors duration-200"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/services" class="font-bold transition-colors duration-200 hover:text-gray-500"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          Services
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="font-bold transition-colors duration-200 hover:text-gray-500"
          :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
        >
          About Us
        </router-link>
      </li>
    
     <div class = "flex justify-between">
        <li>
          <router-link to="/register" @click="closeMenu" 
            class="py-3 px-4  rounded-lg font-bold transition-colors 
            duration-200  text-[#FFFFFF] hover:bg-secondary"
            :class="theme === 'dark' ? 'bg-accent' : 'hover:text-secondary bg-secondary'"

          >
            Get Started
          </router-link>
        </li>
        <li>
          <button 
            @click="$emit('toggle-theme')" 
            class="px-2 rounded transition-colors duration-200"
            :class="theme === 'dark' ? 'text-accent' : 'hover:text-secondary'"
            >
            <i v-if="theme === 'dark'" class="ri-sun-fill text-lg text-yellow-400"></i>
            <i v-else class="ri-moon-fill text-lg"></i>
          </button>
        </li>
     </div>
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
    // homePage: {
    //   type: String,
    //   required: true,
    // },
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
