<template>
    <div class="min-h-screen bg-neutral text-primary px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-primary">
            Join <span class="text-secondary">DevPulse</span>
          </h1>
          <p class="text-lg text-neutral mt-4">
            Explore exciting career opportunities and become part of our innovative team.
          </p>
        </div>
  
        <!-- Job Openings Section -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-accent mb-6">Current Job Openings</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div v-for="job in jobs" :key="job.title"
              class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <h3 class="text-xl font-bold text-primary">{{ job.title }}</h3>
              <p class="text-neutral text-sm mt-2">{{ job.location }} • {{ job.type }}</p>
              <p class="text-neutral mt-3">{{ job.description }}</p>
              <a :href="job.link" target="_blank"
                class="mt-4 inline-block bg-secondary text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent transition">
                Apply Now
              </a>
            </div>
          </div>
        </div>
  
        <!-- Company Culture Section -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-accent mb-6">Our Culture & Work Environment</h2>
          <p class="text-neutral text-lg">
            At DevPulse, we value innovation, collaboration, and personal growth. We foster an inclusive
            environment where creativity thrives, and every team member contributes to meaningful projects.
          </p>
        </div>
  
        <!-- Benefits Section -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-accent mb-6">Why Join Us?</h2>
          <ul class="grid md:grid-cols-2 gap-6">
            <li v-for="benefit in benefits" :key="benefit"
              class="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
              <i class="ri-check-line text-secondary text-2xl mr-3"></i>
              <span class="text-lg text-primary">{{ benefit }}</span>
            </li>
          </ul>
        </div>
  
        <!-- Internship Programs -->
        <div>
          <h2 class="text-3xl font-bold text-accent mb-6">Internship Programs</h2>
          <p class="text-neutral text-lg">
            We offer hands-on internship programs designed to help students and young professionals gain real-world
            experience in technology and innovation.
          </p>
          <a href="/careers/internships" class="mt-4 inline-block text-secondary font-semibold hover:underline">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Careers",
    data() {
      return {
        jobs: [
          {
            title: "Frontend Developer",
            location: "Remote",
            type: "Full-time",
            description: "We are looking for a skilled frontend developer experienced in Vue.js and Tailwind CSS.",
            link: "/careers/frontend-developer"
          },
          {
            title: "Backend Engineer",
            location: "San Francisco, CA",
            type: "Full-time",
            description: "Join our backend team to build scalable APIs and server-side applications.",
            link: "/careers/backend-engineer"
          },
          {
            title: "UX/UI Designer",
            location: "Remote",
            type: "Contract",
            description: "Create intuitive and engaging user experiences for our web and mobile platforms.",
            link: "/careers/ui-ux-designer"
          }
        ],
        benefits: [
          "Competitive Salaries & Bonuses",
          "Remote & Hybrid Work Flexibility",
          "Comprehensive Health & Wellness Benefits",
          "Professional Development & Learning",
          "Diverse & Inclusive Work Culture",
          "Team Retreats & Social Events"
        ]
      };
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
  </style>
  