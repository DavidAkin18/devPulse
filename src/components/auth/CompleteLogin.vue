<template>
    <div class="dark-part flex flex-col lg:flex-row items-center gap-8 lg:gap-0 pt-32 lg:justify-center min-h-screen lg:bg-gray-200">
    
      <div class=" w-full md:w-3/4 p-2 relative">
          <div class="text-right  lg:px-6 lg:py-2 w-full absolute top-0 right-4">
                <router-link to="/login">
                    <button class="bg-blue-500
                    hover:bg-blue-700 text-white font-bold py-1 px-14 rounded-lg shadow 
                    focus:outline-none focus:ring focus:ring-blue-200 text-right">
                        login
                    </button>
                </router-link>
          </div>
          <div class="bg-white w-full pt-10 lg:w-4/6 mx-auto lg:mt-32 p-4 lg:py-20 space-y-2  lg:p-12 md:shadow-lg md:rounded-xl">
              <h2 class="font-bold text-2xl" >Password Reset Email Sent</h2>
              <p class="text-gray-700 text-sm"> We have sent an unlock code to your registered email address.  </p>
              <div class="w-full flex justify-center items-center">
                <img src="" alt="">
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; 

  export default {
 
      setup() {
          const email = ref('')
          return {
              email
          }
      },
  }
  </script>
  
  <style>
  
  </style>