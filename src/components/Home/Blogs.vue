<template>
  <div 
    class="min-h-screen px-6 py-12 transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-primary'"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Blog Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold">
          Industry <span class="text-secondary">Insights & Trends</span>
        </h1>
        <p class="text-lg mt-4" :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'">
          Stay updated with the latest technology trends, tutorials, and company news.
        </p>
      </div>

      <!-- Blog List -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="blog in blogs" :key="blog.title"
          class="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          :class="theme === 'dark' ? 'bg-gray-900 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'"
        >
          <img :src="blog.image" alt="Blog Image" class="w-full h-48 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-bold text-accent mb-2">{{ blog.title }}</h3>
          <p class="text-sm mb-4" :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'">
            {{ blog.excerpt }}
          </p>
          <router-link :to="blog.link" class="font-semibold hover:underline" :class="theme === 'dark' ? 'text-secondary' : 'text-accent'">
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
  props: {
    theme: {
      type: String,
      required: true
    }
  },
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
