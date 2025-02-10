<template>
    <div>
        <Hero/>
        <About/>
        <Service/>
        <CaseStudy/>
        <Blogs/>
        <Resources />
        <FAQ/>
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

export default {
    components:{
        Hero, About, Service, CaseStudy, Blogs, Resources, FAQ
    }
}
</script>