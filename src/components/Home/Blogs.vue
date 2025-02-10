<template>
    <div class="min-h-screen bg-gray-100 text-primary px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Blog Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-primary">Industry <span class="text-secondary">Insights & Trends</span></h1>
          <p class="text-lg text-neutral mt-4">
            Stay updated with the latest technology trends, tutorials, and company news.
          </p>
        </div>
  
        <!-- Blog List -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="blog in blogs" :key="blog.title"
            class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
            <img :src="blog.image" alt="Blog Image" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-bold text-accent mb-2">{{ blog.title }}</h3>
            <p class="text-neutral text-sm mb-4">{{ blog.excerpt }}</p>
            <router-link :to="blog.link" class="text-secondary font-semibold hover:underline">
              Read More →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Blogs",
    data() {
      return {
        blogs: [
          {
            title: "Latest Technology Trends in 2024",
            excerpt: "Discover the top innovations shaping the tech industry this year.",
            image: "https://source.unsplash.com/400x300/?technology",
            link: "/blogs/latest-tech-trends"
          },
          {
            title: "Essential Coding Tips for Developers",
            excerpt: "Boost your coding efficiency with these expert tips and best practices.",
            image: "https://source.unsplash.com/400x300/?coding",
            link: "/blogs/coding-tips"
          },
          {
            title: "DevPulse Company Updates",
            excerpt: "Exciting new projects, partnerships, and growth updates from our team.",
            image: "https://source.unsplash.com/400x300/?office",
            link: "/blogs/company-updates"
          }
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
  