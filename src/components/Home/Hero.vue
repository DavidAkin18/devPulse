<template>
  <div class="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://media.istockphoto.com/id/1413765605/photo/portrait-of-successful-african-american-business-woman.jpg?s=612x612&w=0&k=20&c=7SssKFIuj7EYG_c2A0ZIJUqZpd3hmjQW8P_TMF1WJ5I=');"
    ></div>
    <div class="absolute inset-0 bg-primary opacity-70"></div> <!-- Dark overlay for contrast -->

    <!-- Hero Content -->
    <div class="relative z-10 text-white max-w-3xl">
      <h1 class="text-5xl sm:text-6xl font-extrabold tracking-wide">
        Welcome to <span class="text-secondary">DevPulse</span>
      </h1>

      <!-- Overview -->
      <p class="text-lg sm:text-xl mt-4 text-neutral space-x-4">
        DevPulse provides cutting-edge web and mobile solutions designed
        <span class=" text-accent text-xl font-extrabold  transition-all">{{ currentCountry }}</span>
      </p>

      <!-- Call to Action Buttons -->
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <router-link to="/register">
          <button class="bg-accent text-white px-6 py-3 rounded-md shadow-lg hover:bg-secondary transition-all">
            Get Started
          </button>
        </router-link>
        <router-link to="/about">
          <button class="text-accent bg-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-neutral transition-all">
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
