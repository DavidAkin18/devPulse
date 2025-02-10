<template>
  <div class="min-h-screen">
    <Navbar/>
    <div class="pt-20">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navbar from './layout/Navbar.vue';
import Footer from './layout/Footer.vue';
export default{
  components:{
    Navbar, Footer
  }
}
</script>