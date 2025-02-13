<template>
    <div class="bg-[#E5E5E5] lg:my-5 w-full">
      <div class="lg: mx-auto shadow-md p-8 pt-28 max-w5xl mx-auto px-6 md:px-20 pt-28 bg-white rounded">
        <div class="w-full mb-8">
          <div class="w-full flex mb-2 items-center justify-between">
            <h2 class="text-md font-bold">Edit Bio</h2>
          </div>
          <hr class="border border-[#AAAAAA]" />
        </div>
  
        <form @submit.prevent="handleSubmit">
          <!-- First Name -->
          <div class="mb-4">
            <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="profile.firstName"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
  
          <!-- Last Name -->
          <div class="mb-4">
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="profile.lastName"
              class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
  
          <p @click="showImage = !showImage" class="mt-1 p-2 w-full shadow-xl rounded-md">
            Image
          </p>
  
          <div v-if="showImage" class="space-y-4 relative background-img mb-2 border-b lg:border-b-0 bg-white lg:bg-[#E5E5E5]">
            <!-- Profile Picture Section -->
            <div class="relative" @click="triggerFileInput">
              <img
                :src="profile.profilePicture "
                alt="Profile Picture"
                class="w-20 h-20 md:w-24 md:h-24 border-4 border-white rounded-full bg-white bg-opacity-30"
              />
              <input
                type="file"
                id="image"
                accept="image/*"
                @change="handleImageUpload"
                class="hidden"
              />
              <div class="absolute bottom-0 right-0 cursor-pointer bg-white rounded-full p-1 py-0.5 shadow-lg">
                <i
                  class="ri-image-edit-line text-xl"
                  :class="profile.profilePicture ? 'text-blue-500' : 'text-gray-500'"
                  title="Edit Profile Picture"
                ></i>
              </div>
            </div>
          </div>
  
          <!-- Save Button -->
          <div class="flex mt-4 justify-end gap-4">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        profile: {
          firstName: '',
          lastName: '',
          profilePicture: null,
        },
        showImage: false,
      };
    },
    computed: {
      ...mapState({
        userProfile: state => state.profile,
      }),
    },
    methods: {
      ...mapActions(['updateProfile', 'updateProfilePicture']),
      
      triggerFileInput() {
        const fileInput = document.getElementById('image');
        if (fileInput) fileInput.click();
      },
      handleImageUpload(e) {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.profile.profilePicture = reader.result;
            this.updateProfilePicture(reader.result);  // Update Vuex store
          };
          reader.readAsDataURL(file);
        }
      },
      handleSubmit() {
        this.updateProfile(this.profile);  // Update Vuex store with profile data
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  