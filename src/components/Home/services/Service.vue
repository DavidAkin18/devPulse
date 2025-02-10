<template>
    <div class="min-h-screen bg-gray-100 text-primary px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold">Our <span class="text-secondary">Services</span></h1>
          <p class="text-lg text-neutral mt-4">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
  
        <!-- Services Overview -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold">Overview of Services</h2>
          <p class="text-lg mt-2 text-neutral">
            We provide end-to-end technology solutions designed for innovation and growth.
          </p>
        </section>
  
        <!-- Services List -->
        <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.title"
            class="bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <h3 class="text-xl font-bold text-accent text-center mb-4">
              {{ service.title }}
            </h3>
            <ul class="text-neutral space-y-2">
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
  
        <!-- Link to Comprehensive Service Offerings -->
        <div class="text-center mt-12">
          <router-link to="/comprehensive-services" class="bg-secondary text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-opacity-80 transition">
            View Comprehensive Offerings
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Services",
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
      };
    }
  };
  </script>