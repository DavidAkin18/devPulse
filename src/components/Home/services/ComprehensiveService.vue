<template>
    <div class="min-h-screen bg-gray-100 text-primary px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold">Comprehensive <span class="text-secondary">Service Offerings</span></h1>
          <p class="text-lg text-neutral mt-4">Explore our in-depth technology solutions tailored for businesses.</p>
        </div>
  
        <section v-for="(category, index) in offerings" :key="index" class="mb-12">
          <h2 class="text-3xl font-semibold text-accent">{{ category.title }}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div v-for="(service, idx) in category.services" :key="idx"
              class="bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 class="text-xl font-bold text-center text-primary">{{ service.name }}</h3>
              <ul class="text-neutral space-y-2 mt-4">
                <li v-for="(detail, dIdx) in service.details" :key="dIdx" class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
  export default {
    name: "ComprehensiveServices",
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
    }
  };
</script>