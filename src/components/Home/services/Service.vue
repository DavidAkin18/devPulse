<template>
  <Navbar :theme="theme" @toggle-theme="toggleTheme"/>
  <div 
    class="min-h-screen px-6 py-12 transition-colors duration-300 pt-28"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-primary'"
  >

    <div class="max-w-6xl mx-auto pt-5">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold">
          Our <span class="text-secondary">Services</span>
        </h1>
        <p class="text-lg mt-4" :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'">
          Comprehensive technology solutions tailored to your business needs.
        </p>
      </div>

      <!-- Services Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-semibold">Overview of Services</h2>
        <p class="text-lg mt-2" :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'">
          We provide end-to-end technology solutions designed for innovation and growth.
        </p>
      </section>

      <!-- Services List -->
      <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.title"
          class="p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          :class="theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-900'"
        >
          <h3 class="text-xl font-bold text-accent text-center mb-4">
            {{ service.title }}
          </h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in service.details" :key="index" class="flex items-center gap-2">
              <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      
      <ComprehensiveService :theme="theme"/>
    </div>
   
  </div>
  <Footer :theme="theme"/>
</template>

<script>
import { RouterView } from 'vue-router';
import ComprehensiveService from './ComprehensiveService.vue';
import Navbar from '../../Layout/Navbar.vue';
import Footer from '../../Layout/Footer.vue';

export default {
  name: "Services",
  components:{
    ComprehensiveService,
    Navbar, 
    Footer
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  
  data() {
    return {
      services: [
        {
          title: "Technical Project Management",
          details: [
            "Insight into effective project management strategies",
            "Tools and methodologies used"
          ]
        },
        {
          title: "Server Building",
          details: [
            "Custom server solutions designed for scalability",
            "Managed hosting and infrastructure services"
          ]
        },
        {
          title: "Web Applications",
          details: [
            "Tailored web development solutions",
            "Maintenance, support, and scaling options",
            "Technologies and frameworks utilized"
          ]
        },
        {
          title: "Mobile Applications",
          details: [
            "Development of native and cross-platform apps",
            "User experience and design focus"
          ]
        },
        {
          title: "Internet of Things (IoT)",
          details: [
            "Overview of IoT solutions and benefits",
            "Smart device connectivity and resource management",
            "Analytical tools for optimizing IoT performance"
          ]
        }
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme');
    }
  }
};
</script>
