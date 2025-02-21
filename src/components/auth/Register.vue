<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <div class="py-12 px-6 pt-10 rounded-lg space-y-6 w-full max-w-xl ">
      <!-- Header -->
      <div class="text-left">
        <img 
          src="https://res.cloudinary.com/def9quyti/image/upload/v1740134713/DevPulse_Logo_color2_gnhfag.png" 
          alt="logo" class="h-12"
        >
      </div>
      <div class="text-left">
        <h2 class="text-xl font-bold tracking-wider">Create an account</h2>
        <p class="text-secondary mt-2">Fill in the following information to get started</p>
      </div>

      <!-- Form -->
      <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-4">
          <!-- First Name -->
          <div>
            <label for="first_name" class="block text-sm font-medium text-gray-700">
              First Name <span class="text-primary font-bold">*</span>
            </label>
            <input 
              type="text" 
              id="first_name" 
              class="input-field"
              placeholder="What's your first name?"
              v-model="user.firstName" required 
              @input="touched.firstName = true"
            />
            <p v-if="touched.firstName && !user.firstName" class="text-red-500 text-xs mt-1">
              First name is required.
            </p>
          </div>

          <!-- Last Name -->
          <div>
            <label for="last_name" class="block text-sm font-medium text-gray-700">
              Last Name <span class="text-primary font-bold">*</span>
            </label>
            <input 
              type="text" 
              id="last_name" 
              class="input-field" 
              placeholder="What's your last name?"
              v-model="user.lastName" required 
              @input="touched.lastName = true"
            />
            <p v-if="touched.lastName && !user.lastName" class="text-red-500 text-xs mt-1">
              Last name is required.
            </p>
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address <span class="text-primary font-bold">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            class="input-field" 
            placeholder="What's your email?"
            v-model="user.email" required 
            @input="touched.email = true"
          />
          <p v-if="touched.email && emailError" class="text-red-500 text-xs mt-1">
            Enter a valid email address.
          </p>
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password <span class="text-primary font-bold">*</span>
          </label>
          <div class="relative">
            <input   
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              class="input-field" 
              placeholder="Enter your password"
              v-model="user.password" required 
              @input="touched.password = true"
            />
            <span @click="togglePasswordVisibility" 
              class="absolute inset-y-0 right-3 top-0 flex items-center 
              cursor-pointer text-gray-500 hover:text-gray-700"
            >
              <i v-if="showPassword" class="ri-eye-line text-xl"></i>
              <i v-else class="ri-eye-off-line text-xl"></i>
            </span>
          </div>
          <p v-if="touched.password && !hasUppercase" class="text-red-500 text-xs mt-1">
            Must include at least one uppercase letter.
          </p>
          <p v-if="touched.password && !hasNumber" class="text-red-500 text-xs mt-1">
            Must include at least one number.
          </p>
          <p v-if="touched.password && !hasSymbol" class="text-red-500 text-xs mt-1">
            Must include at least one symbol.
          </p>
          <p v-if="touched.password && !isLongEnough" class="text-red-500 text-xs mt-1">
            Must be at least 6 characters long.
          </p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirm_password" class="block text-sm font-medium text-gray-700">
            Confirm Password <span class="text-primary font-bold">*</span>
          </label>
          <div class="relative">
            <input   
              :type="showRepeatPassword ? 'text' : 'password'" 
              id="confirm_password" 
              class="input-field" 
              placeholder="Confirm your password"
              v-model="user.confirmPassword" required 
              @input="touched.confirmPassword = true"
            />
            <span @click="toggleRepeatPasswordVisibility" 
              class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
              <i v-if="showRepeatPassword" class="ri-eye-line text-xl"></i>
              <i v-else class="ri-eye-off-line text-xl"></i>
            </span>
          </div>
          <p v-if="touched.confirmPassword && user.password !== user.confirmPassword" 
            class="text-red-500 text-xs mt-1">
            Passwords do not match.
          </p>
        </div>

        <!-- Newsletter Subscription -->
        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="subscribe_newsletter" 
            v-model="user.subscribeNewsletter"
            class="mr-2 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label for="subscribe_newsletter" class="text-sm text-gray-700">
            Subscribe to our newsletter for updates and insights.
          </label>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          :disabled="!isFormValid"
          :class="{
            'bg-accent text-white hover:bg-green-700': isFormValid, 
            'bg-gray-300 text-gray-600 cursor-not-allowed': !isFormValid
          }"
          class="mt-6 w-full py-2 rounded-md font-semibold transition">
          REGISTER <i class="ri-arrow-right-line"></i>
        </button>
      </form>

      <!-- Login Redirect -->
      <p class="text-sm mt-4 text-left text-primary">
        Already have an account?
        <router-link to="/login" class="text-secondary font-semibold hover:underline">Sign In</router-link>
      </p>

      <!-- Terms -->
      <p class="text-xs mt-4 text-left text-neutral">
        By creating an account, I confirm that I have read and understood the
        <a href="#" class="text-primary hover:underline">Privacy Policy</a> and
        <a href="#" class="text-primary hover:underline">Terms of Use</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        subscribeNewsletter: false
      },
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
      },
      showPassword: false,
      showRepeatPassword: false
    };
  },
  computed: {
    hasUppercase() {
      return /[A-Z]/.test(this.user.password);
    },
    hasNumber() {
      return /\d/.test(this.user.password);
    },
    hasSymbol() {
      return /[@$!%*?&#+-]/.test(this.user.password);
    },
    isLongEnough() {
      return this.user.password.length >= 6;
    },
    emailError() {
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email);
    },
    isFormValid() {
      return this.user.firstName && this.user.lastName && !this.emailError && this.hasUppercase && this.hasNumber && this.hasSymbol && this.isLongEnough && this.user.password === this.user.confirmPassword;
    }
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid) {
        this.$router.push("/bio");
      }
    }
  }
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary;
}
</style>
