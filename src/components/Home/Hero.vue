<template>
  <div 
    class="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-300"
    :class="theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'"
  >
    <!-- Background Image with Overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://media.istockphoto.com/id/1413765605/photo/portrait-of-successful-african-american-business-woman.jpg?s=612x612&w=0&k=20&c=7SssKFIuj7EYG_c2A0ZIJUqZpd3hmjQW8P_TMF1WJ5I=');"
    ></div>
    
    <!-- Dynamic Overlay (Darker in dark mode) -->
    <div 
      class="absolute inset-0 opacity-70 transition-opacity duration-300"
      :class="theme === 'dark' ? 'bg-black' : 'bg-primary'"
    ></div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-3xl">
      <h1 class="text-5xl sm:text-6xl font-extrabold tracking-wide">
        Welcome to <span class="text-secondary">DevPulse</span>
      </h1>

      <!-- Overview -->
      <p class="text-lg sm:text-xl mt-4 space-x-4">
        DevPulse provides cutting-edge web and mobile solutions designed
        <span class="text-accent text-xl font-extrabold transition-all">{{ currentCountry }}</span>
      </p>

      <!-- Call to Action Buttons -->
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <router-link to="/register">
          <button 
            class="px-6 py-3 rounded-md shadow-lg transition-all"
            :class="theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-600' : 'bg-accent text-white hover:bg-secondary'"
          >
            Get Started
          </button>
        </router-link>
        <router-link to="/about">
          <button 
            class="px-6 py-3 rounded-lg font-bold shadow-lg transition-all"
            :class="theme === 'dark' ? 'bg-gray-900 text-gray-200 hover:bg-gray-500' : 'bg-white text-accent hover:bg-neutral'"
          >
            Learn More
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      countries: [' to Drive Innovation', ' for Efficiency', ' and Business Success'],
      countryCounter: 0
    };
  },
  computed: {
    currentCountry() {
      return this.countries[this.countryCounter]; // Dynamically updates the text
    }
  },
  methods: {
    changeCountry() {
      this.countryCounter = (this.countryCounter + 1) % this.countries.length;
    }
  },
  mounted() {
    setInterval(this.changeCountry, 2000);
  }
};
</script>

<style scoped>
/* Tailwind handles styling, no extra styles needed */
</style>
