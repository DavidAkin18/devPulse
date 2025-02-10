<template>
  <nav class="bg-primary text-white py-6 px-4 md:px-16 w-full  shadow-lg z-50 fixed top-0  flex justify-between items-center">
    <!-- Logo -->

      <h1 class="text-2xl font-bold">DevPulse</h1>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <router-link to="/" 
            class="hover:text-secondary   py-2 px-3 rounded-lg  font-bold">
            {{homePage}}
          </router-link>
        </li>
        <li><router-link to="/login" class="hover:text-secondary font-bold ">Login</router-link></li>
        <li><router-link to="/register" class="hover:bg-secondary  bg-accent py-2 px-3 rounded-lg  font-bold">Sign up</router-link></li>

        
      </ul>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <i class="ri-menu-3-line text-3xl"></i>
      </button>

      <!-- Mobile Sidebar -->
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMenu"></div>
      
        <div
          class="fixed top-0 right-0 w-full h-40 pt-4 bg-primary shadow-lg rounded-xl  transform transition-transform duration-300 ease-in-out z-50"
          :class="isOpen ? 'translate-y-0 mt-24 ' : '-translate-y-full  '"
        >
          <button @click="closeMenu" class="absolute top-4 right-4 text-white text-3xl focus:outline-none">
            <i class="ri-close-line"></i>
          </button>

          <ul class="space-y-6 text-center">
            <li>
              <router-link to="/" class="hover:text-secondary py-2 px-3 rounded-lg font-bold">
                {{ homePage }}
              </router-link>
            </li>
            <li>
              <router-link to="/login" @click="closeMenu" class="hover:text-secondary font-bold">
                Login
              </router-link>
            </li>
            <li>
              <router-link to="/register" @click="closeMenu" class="hover:bg-secondary bg-accent text-bold  py-4 px-12 rounded-lg font-bold">
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
  props:{
    homePage:{
            type: String,
            required: true,
        },
        beneficiaryData:{
            type: Object,
            required: false,
            default: () => {}
        }
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
/* No extra styles needed as Tailwind handles responsiveness and transitions */
</style>
