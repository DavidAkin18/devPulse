<template>
    <!-- Footer Section -->
    <footer class="bg-gray-900 text-white py-8 ">
      <div class="xl:max-w-6xl lg:max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h2 class="text-xl font-bold mb-4">DevPulse</h2>
          <p class="text-gray-400">Innovative technology solutions tailored for businesses.</p>
        </div>
        
        <!-- Navigation Links -->
        <div>
          <h2 class="text-xl font-bold mb-4">Quick Links</h2>
          <ul class="space-y-2 text-gray-400">
            <li><router-link to="/" class="hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-white">About Us</router-link></li>
            <li><router-link to="/services" class="hover:text-white">Services</router-link></li>
            <li><router-link to="/" class="hover:text-white">Blog</router-link></li>
            <li><router-link to="/" class="hover:text-white">Contact Us</router-link></li>
            <li><router-link to="/careers" class="hover:text-white">Careers</router-link></li>
          </ul>
        </div>
        
        <!-- Social Media & Newsletter -->
        <div>
          <h2 class="text-xl font-bold mb-4">Connect With Us</h2>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white"><i class="ri-facebook-fill"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="ri-twitter-x-line"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="ri-linkedin-box-fill"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="ri-instagram-line"></i></a>
          </div>
          <h2 class="text-xl font-bold mt-6 mb-2">Subscribe to Our Newsletter</h2>
          <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 rounded text-black">
          <button class="mt-2 bg-secondary text-white px-4 py-2 rounded w-full">Subscribe</button>
        </div>
      </div>
      <div class="text-center text-gray-500 text-sm mt-6">&copy; 2024 DevPulse. All rights reserved. | <router-link to="/" class="hover:text-white">Privacy Policy</router-link> | <router-link to="/" class="hover:text-white">Terms of Service</router-link></div>
    </footer>
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