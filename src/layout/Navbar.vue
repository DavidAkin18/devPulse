<template>
  <nav class="bg-primary text-white py-6 px-16 w-full  shadow-lg z-50 fixed top-0  flex justify-between items-center">
    <!-- Logo -->

      <h1 class="text-2xl font-bold">DevPulse</h1>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link to="/" class="hover:text-secondary">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-secondary">About</router-link></li>
        <li><router-link to="/services" class="hover:text-secondary">Services</router-link></li>
        <li><router-link to="/" class="hover:text-secondary">Contact</router-link></li>
      </ul>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <i class="ri-menu-3-line text-3xl"></i>
      </button>

      <!-- Mobile Sidebar -->
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMenu"></div>
      
      <div
        class="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg transform transition-transform duration-300 ease-in-out z-50"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <button @click="closeMenu" class="absolute top-4 right-4 text-white text-3xl focus:outline-none">
          <i class="ri-close-line"></i>
        </button>

        <ul class="mt-16 space-y-6 text-center">
          <li><router-link to="/" @click="closeMenu" class="block py-2 hover:text-secondary">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu" class="block py-2 hover:text-secondary">About</router-link></li>
          <li><router-link to="/services" @click="closeMenu" class="block py-2 hover:text-secondary">Services</router-link></li>
          <li><router-link to="/" @click="closeMenu" class="block py-2 hover:text-secondary">Contact</router-link></li>
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
