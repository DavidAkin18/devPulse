<template>
    <div class="mx-auto py-12 px-6 max-w-lg">

      <div class="text-left">
          <img 
          src="https://res.cloudinary.com/def9quyti/image/upload/v1740134713/DevPulse_Logo_color2_gnhfag.png" 
          alt="logo" class="h-12"
        >        
      </div>
      <h2 class="text-primary text-2xl font-bold pt-4 text-left">
        Reset your password
      </h2>
      <div class="register-form mt-6 bg-white py-6 rounded-lg">
        <form @submit.prevent="initiatePasswordReset" class="space-y-6">
          <div>
            <label class="block text-secondary font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              v-model="email"
              class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
            />
          </div>
          <button
            class="w-full py-3 rounded-lg font-semibold text-white bg-accent hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!isValidEmail"
          >
            Continue
          </button>
        </form>
        <div class="mt-6 text-center">
          <p class="text-sm text-neutral">
            Do you know your password?
            <router-link to="/login" class="text-secondary font-semibold">Login here</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
      };
    },
    computed: {
      isValidEmail() {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email.trim());
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom Tailwind colors applied */
  </style>
  