<template>
    <div class="flex min-h-screen items-center justify-center bg-white">
      <div class="py-12 p-4 pt-10 rounded-lg space-y-6 w-full max-w-md">
        <div class="text-left">
          <h2 class="text-3xl font-extrabold text-primary">DevPulse</h2>
        </div>
  
        <h2 class="text-xl font-bold tracking-wider">Sign in</h2>
  
        <form @submit.prevent="loginUser">
          <div class="mt-6">
            <label for="email" class="text-sm font-medium text-gray-700">
              Email Address <i class="ri-asterisk text-primary font-bold text-xs"></i>
            </label>
            <input 
              type="email"
              id="email"
              class="input-field bg-[#EDEDF9]" 
              placeholder="What's your email?"
              v-model="user.username"
              @input="validateEmail"
              required
            />
            <p v-if="!valid.email && user.username" class="text-red-500 text-xs mt-1">
              Please enter a valid email address.
            </p>
          </div>
  
          <div class="mt-4 relative">
            <label for="password" class="text-sm font-medium text-gray-700">
              Password <i class="ri-asterisk text-primary font-bold text-xs"></i>
            </label>
            <input   
              :type="showPassword ? 'text' : 'password'"
              id="password"
              class="input-field bg-[#EDEDF9]" 
              placeholder="Enter your password"
              v-model="user.secret"
              @input="validatePassword"
              required
            />
            <span @click="togglePasswordVisibility" 
              class="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
              <i v-if="showPassword" class="ri-eye-line text-xl"></i>
              <i v-else class="ri-eye-off-line text-xl"></i>
            </span>
            <p v-if="!valid.password && user.secret" class="text-red-500 text-xs mt-1">
              Password field cannot be empty.
            </p>
          </div>
  
          <div class="mt-2">
            <span class="text-primary text-sm">
              <router-link to="/forgot-password">Forgot password?</router-link>
            </span>
          </div>
  
          <button 
            type="submit"
            :disabled="disableButton"
            :class="{
              'bg-secondary text-white hover:bg-accent': !disableButton, 
              'bg-gray-300 text-gray-600 cursor-not-allowed': disableButton
            }"
            class="mt-6 w-full py-2 rounded-md font-semibold transition"
          >
            LOGIN <i class="ri-arrow-right-line"></i>
          </button>
  
          <p class="text-sm mt-4 text-left text-primary">
            New to DevPulse?
            <router-link to="/register" class="text-secondary font-semibold hover:underline">Create an account</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: "",
          secret: "",
        },
        valid: {
          email: false,
          password: false,
        },
        showPassword: false,
      };
    },
    computed: {
      disableButton() {
        return !this.valid.email || !this.valid.password;
      },
    },
    methods: {
      validateEmail() {
        this.valid.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.username.trim());
      },
      validatePassword() {
        this.valid.password = this.user.secret.length > 0;
      },
      loginUser() {
        console.log("Logging in user", this.user);
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
  <style scoped>
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 4px;
  }
  </style>
  