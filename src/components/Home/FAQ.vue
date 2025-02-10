<template>
    <div class="min-h-screen bg-gray-100 text-primary px-6 py-12">
      <div class="max-w-5xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold">
            Frequently Asked <span class="text-secondary">Questions</span>
          </h1>
          <p class="text-lg text-neutral mt-4">
            Find answers to common queries about our services, processes, and technical aspects.
          </p>
        </div>
  
        <!-- FAQ List -->
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <button class="w-full flex justify-between items-center text-lg font-semibold text-primary"
              @click="toggleFAQ(index)">
              {{ faq.question }}
              <span :class="{'rotate-180': activeIndex === index}" class="transition-transform transform text-secondary">
                ▼
              </span>
            </button>
            <p v-if="activeIndex === index" class="mt-3 text-neutral">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQ",
    data() {
      return {
        activeIndex: null,
        faqs: [
          {
            question: "What services does DevPulse offer?",
            answer: "We provide a wide range of services, including web development, mobile applications, IoT solutions, cloud services, and project management."
          },
          {
            question: "How do I start a project with DevPulse?",
            answer: "Simply contact us via our inquiry form, and our team will get in touch to discuss your requirements and project details."
          },
          {
            question: "Do you offer technical support after project completion?",
            answer: "Yes, we provide ongoing support and maintenance to ensure your project runs smoothly."
          },
          {
            question: "What technologies do you specialize in?",
            answer: "We work with modern technologies such as React, Vue.js, Node.js, Python, Docker, Kubernetes, AWS, and more."
          },
          {
            question: "How long does it take to complete a project?",
            answer: "Project timelines vary based on complexity. We provide estimated timelines during the consultation phase."
          }
        ]
      };
    },
    methods: {
      toggleFAQ(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>
  
  <style scoped>
  .text-primary {
    color: #002D72;
  }
  .text-secondary {
    color: #00BFFF;
  }
  .text-neutral {
    color: #BDC3C7;
  }
  </style>
  