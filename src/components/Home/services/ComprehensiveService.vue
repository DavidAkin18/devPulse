<template>
  
  <div :class="theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-primary'" class="min-h-screen pt-32 px-6 py-12">
    <nav class="fixed top-0 left-64 z-50 right-0 h-16 hidden lg:flex justify-between items-center px-6 shadow-md"
      :class="theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-black'">
      <h1 class="text-xl font-semibold">Comprehensive Services</h1>
      <router-link to="/bio" class="flex items-center space-x-4">
        <img  class="h-10 w-10 rounded-full object-cover" alt="User Avatar" />
        <span class="text-sm font-semibold">{{ "hii" }}</span>
      </router-link>
    </nav>
    <div class="max-w-4xl mx-auto pt-20">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold">
          Comprehensive 
          <span :class="theme === 'dark' ? 'text-accent' : 'text-secondary'">Service Offerings</span>
        </h1>
        <p :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'" class="text-lg mt-4">
          Explore our in-depth technology solutions tailored for businesses.
        </p>
      </div>

      <section v-for="(category, index) in offerings" :key="index" class="mb-12">
        <h2 :class="theme === 'dark' ? 'text-accent' : 'text-accent'" class="text-3xl font-semibold">{{ category.title }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div v-for="(service, idx) in category.services" :key="idx"
            :class="theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-primary'"
            class="p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            <h3 class="text-xl font-bold text-center">{{ service.name }}</h3>
            <ul :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'" class="space-y-2 mt-4">
              <li v-for="(detail, dIdx) in service.details" :key="dIdx" class="flex items-center gap-2">
                <svg class="w-5 h-5" :class="theme === 'dark' ? 'text-accent' : 'text-secondary'" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
  
<script>
import Footer from '../../Layout/Footer.vue';
import Navbar from '../../Layout/Navbar.vue';

export default {
  name: "ComprehensiveServices",
  components: {
    Navbar, Footer
  },
  data() {
    return {
      offerings: [
        {
          title: "Development Work",
          services: [
            { name: "Web Development", details: ["Front-end Development (HTML, CSS, JavaScript)", "Back-end Development (Node.js, Python, Ruby, PHP)", "Full-Stack Development", "CMS Development (WordPress, Drupal)"] },
            { name: "Mobile App Development", details: ["iOS App Development", "Android App Development", "Cross-Platform Development (Flutter, React Native)"] },
            { name: "Software Development", details: ["Custom Software Development", "Enterprise Software Solutions", "SaaS Development", "Desktop Applications"] },
            { name: "Game Development", details: ["Mobile Games", "PC and Console Games", "AR/VR Game Development"] },
            { name: "UI/UX Design", details: ["User Research", "Prototyping and Wireframing", "Usability Testing"] },
            { name: "API Development and Integration", details: ["RESTful API Development", "Third-Party API Integration"] }
          ]
        },
        {
          title: "Project and Server Work",
          services: [
            { name: "Project Management", details: ["Agile and Waterfall methodologies", "Scrum practices"] },
            { name: "Cloud Services", details: ["Cloud Infrastructure Setup (AWS, Azure, Google Cloud)", "Cloud Migration Services", "Cloud Storage Solutions"] },
            { name: "Server Management", details: ["Dedicated Server Hosting", "Virtual Private Server (VPS) Management", "Server Configuration and Optimization"] },
            { name: "DevOps Services", details: ["Continuous Integration/Continuous Deployment (CI/CD)", "Containerization (Docker, Kubernetes)", "Infrastructure as Code (Terraform, Ansible)"] },
            { name: "Database Management", details: ["Database Design and Development", "Database Migration", "Database Optimization and Maintenance"] }
          ]
        },
        {
          title: "IoT Work",
          services: [
            { name: "IoT Solutions Development", details: ["IoT Device Development", "IoT Application Development", "Edge Computing Solutions"] },
            { name: "IoT Platform Integration", details: ["Integration with Cloud Platforms (AWS IoT, Azure IoT)", "Data Management and Analytics"] },
            { name: "Smart Home Solutions", details: ["Home Automation Systems", "Security Systems Integration"] },
            { name: "Industrial IoT (IIoT)", details: ["Smart Manufacturing Solutions", "Predictive Maintenance Systems", "Supply Chain Management Solutions"] },
            { name: "Wearable Technology", details: ["Wearable Device Development", "Health Monitoring Applications"] }
          ]
        }
      ]
    };
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme');
    }
  }
};
</script>
