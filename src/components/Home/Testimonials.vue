<template>
    <div class="min-h-screen bg-gray-100 text-primary px-6 py-12 overflow-hidden">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Header Section -->
        <h1 class="text-5xl font-bold text-primary">
          What Our <span class="text-secondary">Clients Say</span>
        </h1>
        <p class="text-lg text-neutral mt-4">
          See how DevPulse has helped businesses succeed through our expert solutions.
        </p>
  
        <!-- Scrolling Testimonials -->
        <div class="relative mt-12 overflow-hidden">
          <div class="flex space-x-6 animate-scroll">
            <div v-for="(testimonial, index) in [...testimonials, ...testimonials]" :key="index"
              class="min-w-[300px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div class="w-16 h-16 mb-4">
                <img :src="testimonial.image" alt="Client" class="rounded-full border-4 border-accent">
              </div>
              <p class="text-lg text-neutral italic">"{{ testimonial.feedback }}"</p>
              <h3 class="mt-4 text-xl font-semibold text-accent">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-500">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
  
        <!-- Video Testimonials -->
        <div class="mt-12 grid md:grid-cols-2 gap-6">
          <div v-for="(video, index) in videoTestimonials" :key="index" class="relative">
            <iframe
              :src="video.url"
              frameborder="0"
              allowfullscreen
              class="w-full h-64 rounded-lg shadow-lg"
            ></iframe>
            <h3 class="mt-4 text-lg font-semibold text-accent">{{ video.title }}</h3>
          </div>
        </div>
  
        <!-- Metrics Section -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="metric in metrics" :key="metric.label" class="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 class="text-4xl font-bold text-primary">{{ metric.value }}</h3>
            <p class="text-neutral text-lg">{{ metric.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Testimonials",
    data() {
      return {
        testimonials: [
          {
            name: "Jane Doe",
            company: "TechCorp",
            feedback: "DevPulse completely transformed our infrastructure. Amazing service!",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            name: "John Smith",
            company: "InnovateX",
            feedback: "Their expertise in web applications took our business to the next level.",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            name: "Lisa Wong",
            company: "CloudSync",
            feedback: "Top-notch project management and development skills. Highly recommend!",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
          }
        ],
        videoTestimonials: [
          { title: "Client Success Story 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Client Success Story 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" }
        ],
        metrics: [
          { label: "Happy Clients", value: "500+" },
          { label: "Projects Completed", value: "1200+" },
          { label: "Years of Experience", value: "10+" },
          { label: "5-Star Reviews", value: "99%" }
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
  
  /* Infinite Horizontal Scrolling Animation */
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  .animate-scroll {
    display: flex;
    white-space: wrap;
    animation: scroll 15s linear infinite;
  }
  </style>
  