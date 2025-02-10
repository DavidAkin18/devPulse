<template>
    <Navbar/>
    <div class="pt-20">
        <Index/>
    </div>
    <Footer/>
</template>

<script>
import Index from '../components/Home/Index.vue';
import Footer from '../components/Layout/Footer.vue';
import Navbar from '../components/Layout/Navbar.vue';

export default {
    components:{
     Index, Footer, Navbar
    }
}
</script>