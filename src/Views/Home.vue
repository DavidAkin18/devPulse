<template>
    <Navbar :theme="theme" @toggle-theme="toggleTheme"  />
    <div class="pt-20">
        <Index :theme="theme"/>
    </div>
    <Footer  :theme="theme"/>
</template>

<script>
import Index from '../components/Home/Index.vue';
import Navbar from '../components/Layout/Navbar.vue';
import Footer from '../components/Layout/Footer.vue';

export default {
    components:{
     Index, Footer, Navbar
    },
    props:{
        theme:{
            type:String,
            require: true
        }
    },
    methods:{
        toggleTheme() {
            this.$emit('toggle-theme'); // Emit back to App.vue
        },
    }
}
</script>