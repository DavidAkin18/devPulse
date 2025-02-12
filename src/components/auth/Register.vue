<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <div class="py-12 p-4 pt-10 rounded-lg space-y-6 w-full max-w-xl">
      <div class="text-left">
        <h2 class="text-3xl font-extrabold text-primary">DevPulse</h2>
      </div>
      <div class="text-left">
        <h2 class="text-xl font-bold tracking-wider">Create an account</h2>
        <p class="text-neutral mt-2">Fill in the following information to get started</p>
      </div>

      <form class="mt-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="first_name" class="text-sm font-medium text-gray-700">
              First Name <i class="ri-asterisk text-primary font-bold text-xs"></i>
            </label>
            <input 
              type="text" 
              id="first_name" 
              class="input-field bg-[#EDEDF9]" 
              placeholder="What's your first name?"
              v-model="user.firstName" required 
              @input="touched.firstName = true"
            />
            <p v-if="touched.firstName && !user.firstName" class="text-red-500 text-xs mt-1">
              First name is required.
            </p>
          </div>

          <div>
            <label for="last_name" class="text-sm font-medium text-gray-700">
              Last Name <i class="ri-asterisk text-primary font-bold text-xs"></i>
            </label>
            <input 
              type="text" 
              id="last_name" 
              class="input-field bg-[#EDEDF9]" 
              placeholder="What's your last name?"
              v-model="user.lastName" required 
              @input="touched.lastName = true"
            />
            <p v-if="touched.lastName && !user.lastName" class="text-red-500 text-xs mt-1">
              Last name is required.
            </p>
          </div>
        </div>

        <div class="mt-4">
          <label for="email" class="text-sm font-medium text-gray-700">
            Email Address <i class="ri-asterisk text-primary font-bold text-xs"></i>
          </label>
          <input 
            type="email" 
            id="email" 
            class="input-field bg-[#EDEDF9]" 
            placeholder="What's your email?"
            v-model="user.email" required 
            @input="touched.email = true"
          />
          <p v-if="touched.email && emailError" class="text-red-500 text-xs mt-1">
            Enter a valid email address.
          </p>
        </div>

       

        <div class="mt-4 ">
          <label for="password" class="text-sm font-medium text-gray-700">
            Password <i class="ri-asterisk text-primary font-bold text-xs"></i>
          </label>
          <div class="relative">
            <input   
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              class="input-field bg-[#EDEDF9]" 
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

        <div class="mt-4 ">
          <label for="confirm_password" class="text-sm font-medium text-gray-700">
            Confirm Password <i class="ri-asterisk text-primary font-bold text-xs"></i>
          </label>
          <div class="relative">
            <input   
              :type="showRepeatPassword ? 'text' : 'password'" 
              id="confirm_password" 
              class="input-field bg-[#EDEDF9]" 
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
        <div class="mt-4 flex items-center">
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
        <button 
          type="submit" 
          :disabled="!isFormValid"
          :class="{
            'bg-secondary text-white hover:bg-accent': isFormValid, 
            'bg-gray-300 text-gray-600 cursor-not-allowed': !isFormValid
          }"
          class="mt-6 w-full py-2 rounded-md font-semibold transition">
          REGISTER <i class="ri-arrow-right-line"></i>
        </button>
      </form>

      <p class="text-sm mt-4 text-left text-primary">
        Already have an Account?
        <router-link to="/login" class="text-secondary font-semibold hover:underline">Sign In</router-link>
      </p>

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
      return !this.user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email);
    },
    isFormValid() {
      return this.user.firstName && this.user.lastName && !this.emailError && this.user.password.length >= 6 && this.user.password === this.user.confirmPassword;
    }
  }
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
