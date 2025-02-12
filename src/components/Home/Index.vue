<template>
    <div>
        <Hero :theme="theme"/>
        <!-- <About/> -->
        <Service :theme="theme"/>
        <CaseStudy :theme="theme"/>
        <Blogs :theme="theme"/>
        <Resources :theme="theme" />
        <FAQ :theme="theme"/>
        <Testimonials :theme="theme" />
    </div>
</template>



<script>
import About from './About/About.vue';
import Blogs from './Blogs.vue';
import CaseStudy from './CaseStudy.vue';
import FAQ from './FAQ.vue';
import Hero from './Hero.vue';
import Resources from './Resources.vue';
import Service from './services/Service.vue';
import Testimonials from './Testimonials.vue';

export default {
    components:{
        Hero, About, Service, CaseStudy, Blogs, Resources, FAQ, Testimonials
    },
    props:{
        theme:{
            type:String,
            require: true
        }
    }
}
</script>