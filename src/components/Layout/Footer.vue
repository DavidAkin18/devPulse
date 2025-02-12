<template>
  <!-- Footer Section -->
  <footer 
    class="py-8 transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-200 text-primary'"
  >
    <div class="xl:max-w-6xl lg:max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Company Info -->
      <div>
        <h2 class="text-xl font-bold mb-4">DevPulse</h2>
        <p :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'">
          Innovative technology solutions tailored for businesses.
        </p>
      </div>
      
      <!-- Navigation Links -->
      <div>
        <h2 class="text-xl font-bold mb-4">Quick Links</h2>
        <ul class="space-y-2">
          <li><router-link to="/" class="transition-colors hover:text-secondary">Home</router-link></li>
          <li><router-link to="/about" class="transition-colors hover:text-secondary">About Us</router-link></li>
          <li><router-link to="/services" class="transition-colors hover:text-secondary">Services</router-link></li>
          <li><router-link to="/blog" class="transition-colors hover:text-secondary">Blog</router-link></li>
          <li><router-link to="/contact" class="transition-colors hover:text-secondary">Contact Us</router-link></li>
          <li><router-link to="/careers" class="transition-colors hover:text-secondary">Careers</router-link></li>
        </ul>
      </div>
      
      <!-- Social Media & Newsletter -->
      <div>
        <h2 class="text-xl font-bold mb-4">Connect With Us</h2>
        <div class="flex space-x-4">
          <a href="#" class="transition-colors text-gray-500 hover:text-secondary"><i class="ri-facebook-fill"></i></a>
          <a href="#" class="transition-colors text-gray-500 hover:text-secondary"><i class="ri-twitter-x-line"></i></a>
          <a href="#" class="transition-colors text-gray-500 hover:text-secondary"><i class="ri-linkedin-box-fill"></i></a>
          <a href="#" class="transition-colors text-gray-500 hover:text-secondary"><i class="ri-instagram-line"></i></a>
        </div>
        <h2 class="text-xl font-bold mt-6 mb-2">Subscribe to Our Newsletter</h2>
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="w-full px-4 py-2 rounded transition-all"
          :class="theme === 'dark' ? 'bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700' : 'text-black bg-white border border-gray-300'"
        >
        <button 
          class="mt-2 px-4 py-2 rounded w-full transition-all font-semibold"
          :class="theme === 'dark' ? 'bg-accent text-gray-900 hover:bg-green-500' : 'bg-secondary text-white hover:bg-blue-600'"
        >
          Subscribe
        </button>
      </div>
    </div>
    <div class="text-center text-sm mt-6">
      <p :class="theme === 'dark' ? 'text-gray-500' : 'text-gray-600'">
        &copy; 2024 DevPulse. All rights reserved. | 
        <router-link to="/privacy" class="hover:text-secondary">Privacy Policy</router-link> | 
        <router-link to="/terms" class="hover:text-secondary">Terms of Service</router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    theme: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.text-primary {
  color: #002D72;
}
.text-accent {
  color: #27AE60;
}
.text-secondary {
  color: #00BFFF;
}
.text-neutral {
  color: #BDC3C7;
}

/* Hover Transitions */
a, button {
  transition: all 0.3s ease-in-out;
}
</style>
