<template>
  <div 
    class="min-h-screen px-6 py-12 transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-neutral text-primary'"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold">
          Explore Our <span class="text-secondary">Resources</span>
        </h1>
        <p class="text-xl mt-4" :class="theme === 'dark' ? 'text-gray-400' : 'text-accent'">
          Access top-tier educational materials, tools, and insights to stay ahead in technology.
        </p>
      </div>

      <!-- Resource Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div 
          v-for="resource in resources" :key="resource.title"
          class="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center"
          :class="theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-neutral-700' : 'bg-white text-gray-900 hover:bg-gray-100'"
        >
          <div class="w-16 h-16 flex justify-center items-center rounded-full mr-4"
            :class="theme === 'dark' ? 'bg-secondary text-black' : 'bg-secondary text-white'">
            <i :class="resource.icon" class="text-3xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-accent">{{ resource.title }}</h3>
            <p class="text-sm mt-2" :class="theme === 'dark' ? 'text-gray-400' : 'text-neutral'">
              {{ resource.description }}
            </p>
            <router-link :to="resource.link" class="font-semibold hover:underline mt-3 inline-block"
              :class="theme === 'dark' ? 'text-secondary' : 'text-accent'">
              Learn More →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resources",
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      resources: [
        {
          title: "Whitepapers",
          description: "Explore industry-leading insights on the latest technology trends and best practices.",
          icon: "ri-book-open-line",
          link: "/resources/whitepapers"
        },
        {
          title: "E-books",
          description: "Access in-depth e-books providing knowledge on software development and innovation.",
          icon: "ri-file-text-line",
          link: "/resources/ebooks"
        },
        {
          title: "Webinars",
          description: "Watch recorded webinars tackling technical challenges and expert discussions.",
          icon: "ri-video-line",
          link: "/resources/webinars"
        },
        {
          title: "Developer Tools",
          description: "Find recommended tools and software for developers to enhance productivity.",
          icon: "ri-tools-line",
          link: "/resources/tools"
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
