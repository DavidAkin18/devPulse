<template>
  <div class="bg-[#E5E5E5] lg:my-5 w-full">
    <nav class="fixed top-0 left-64 right-0 h-16 hidden lg:flex justify-between items-center px-6 shadow-md"
        :class="theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-black'">
        <h1 class="text-xl text-accent font-semibold">Profile</h1>
        <router-link to="/bio" class="flex items-center space-x-4">
          <img :src="userProfile.profilePicture || defaultProfilePic"
               class="h-10 w-10 border border-secondary rounded-full object-cover"
               alt="User Avatar" />
          <span class="text-sm font-semibold">{{ fullName }}</span>
        </router-link>
    </nav>

    <div class="lg:mx-auto p-8 pt-28 max-w-5xl mx-auto px-6 md:px-20 bg-white rounded">
      <!-- Profile Header -->
      <div class="w-full mb-8">
        <div class="w-full flex items-center justify-between">
          <h2 class="text-md font-bold text-[#333]">Profile</h2>
        </div>
        <hr class="border border-[#AAAAAA]" />
      </div>

      <!-- Profile Info -->
      <div class="flex items-center gap-4 mb-6">
        <div class="relative" @click="triggerFileInput">
          <img
            :src="userProfile.profilePicture || defaultProfilePic"
            alt="Profile Picture"
            class="w-20 h-20 md:w-24 md:h-24 border-4 border-secondary rounded-full bg-white bg-opacity-30"
          />
          <input type="file" id="image" accept="image/*" @change="handleImageUpload" class="hidden" />
          <div class="absolute bottom-0 right-0 cursor-pointer bg-white rounded-full p-1 py-0.5 shadow-lg">
            <i class="ri-image-edit-line text-xl text-blue-500" title="Edit Profile Picture"></i>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-[#333]">{{ fullName }}</h3>
          <p class="text-sm text-gray-500">{{ userProfile.email }}</p>
        </div>
      </div>

      <!-- Profile Form -->
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" v-model="profile.firstName"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              @input="validateField('firstName')" />
            <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" v-model="profile.lastName"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              @input="validateField('lastName')" />
            <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" v-model="profile.email" placeholder="example@gmail.com"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              @input="validateField('email')" />
            <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Nick Name</label>
            <input type="text" v-model="profile.nickName"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Gender</label>
            <select v-model="profile.gender" class="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Country</label>
            <input type="text" v-model="profile.country"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Language</label>
            <select v-model="profile.language" class="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex mt-4 justify-end gap-4">
          <button type="submit" class="bg-accent hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        nickName: '',
        gender: '',
        country: '',
        language: '',
        email: '',
        profilePicture: '',
      },
      errors: {},
      defaultProfilePic: 'https://res.cloudinary.com/def9quyti/image/upload/v1740141525/profile-avatar_p9w21j.jpg',
    };
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.profile,
    }),
    ...mapGetters(['getFullName']),
    fullName() {
      return this.getFullName || 'User';
    },
  },
  methods: {
    ...mapActions(['updateProfile', 'updateProfilePicture']),

    triggerFileInput() {
      document.getElementById('image')?.click();
    },
    handleImageUpload(e) {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.profile.profilePicture = reader.result;
          this.updateProfilePicture(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    validateField(field) {
      if (field === 'firstName' || field === 'lastName') {
        this.errors[field] = this.profile[field].trim() ? '' : 'This field is required';
      }
      if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.errors.email = emailRegex.test(this.profile.email) ? '' : 'Invalid email format';
      }
    },
    handleSubmit() {
      this.validateField('firstName');
      this.validateField('lastName');
      this.validateField('email');

      if (!this.errors.firstName && !this.errors.lastName && !this.errors.email) {
        this.updateProfile(this.profile);
        this.$router.push('/dashboard');
      }
    },
  },
};
</script>
