<template>
  <Navbar :homePage = "homePage"/>
    <div class="min-h-screen bg-gradient-to-b from-primary to-neutral px-6 py-12 pt-32 text-white">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-5xl font-extrabold">
            About <span class="bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text">DevPulse</span>
          </h1>
          <p class="text-lg mt-4 text-neutral">Empowering businesses with cutting-edge web and mobile solutions.</p>
        </div>
  
        <!-- Mission & Vision -->
        <section class="mb-12 flex flex-wrap justify-center gap-8">
          <div class="glass-card w-full md:w-5/12">
            <h2 class="text-3xl font-bold">Our Mission</h2>
            <p class="text-lg mt-2">
              We build innovative, scalable, and efficient digital solutions that help businesses thrive in a competitive world.
            </p>
          </div>
          <div class="glass-card w-full md:w-5/12">
            <h2 class="text-3xl font-bold">Our Vision</h2>
            <p class="text-lg mt-2">
              To be a global leader in technology solutions, fostering innovation and digital transformation worldwide.
            </p>
          </div>
        </section>
  
        <!-- Core Values -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold text-center">Core Values</h2>
          <div class="grid md:grid-cols-3 gap-8 mt-6">
            <div class="glass-card">
              <h3 class="text-xl font-bold">🚀 Innovation</h3>
              <p>We explore new technologies to deliver the best solutions.</p>
            </div>
            <div class="glass-card">
              <h3 class="text-xl font-bold">🤝 Integrity</h3>
              <p>We operate with transparency and honesty in all our dealings.</p>
            </div>
            <div class="glass-card">
              <h3 class="text-xl font-bold">💡 Customer-Centric</h3>
              <p>Our clients' success is our top priority.</p>
            </div>
          </div>
        </section>
  
        <!-- Meet the Team -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold text-center">Meet Our Team</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div class="team-card">
              <img src="" alt="CEO" class="team-img">
              <h3 class="text-xl font-bold">John Doe</h3>
              <p class="text-neutral">CEO & Founder</p>
            </div>
            <div class="team-card">
              <img src="" alt="CTO" class="team-img">
              <h3 class="text-xl font-bold">Jane Smith</h3>
              <p class="text-neutral">Chief Technology Officer</p>
            </div>
            <div class="team-card">
              <img src="" alt="COO" class="team-img">
              <h3 class="text-xl font-bold">Michael Lee</h3>
              <p class="text-neutral">Chief Operating Officer</p>
            </div>
          </div>
        </section>

        <!-- <Chart/> -->
  
        <!-- Our Journey -->
        <section>
          <h2 class="text-3xl font-semibold text-center">Our Journey</h2>
          <div class="timeline mt-6">
            <div class="timeline-item">
              <h3 class="text-xl font-bold">2018 - Founded</h3>
              <p>DevPulse was founded to create next-gen web solutions.</p>
            </div>
            <div class="timeline-item">
              <h3 class="text-xl font-bold">2020 - Major Milestone</h3>
              <p>Expanded globally and served over 100 clients.</p>
            </div>
            <div class="timeline-item">
              <h3 class="text-xl font-bold">2023 - Innovation & Growth</h3>
              <p>Launched AI-powered solutions for business automation.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
</template>


<script>
import Footer from "../../layout/Footer.vue"
import Navbar from "../../layout/Navbar.vue";


  export default {
    name: "About",
    components:{
      Navbar,Footer
    },
    data(){
      return{
        homePage:'Home'
      }
    }
    
  };
</script>


  <style scoped>
  /* Glassmorphism Card */
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  .glass-card:hover {
    transform: scale(1.05);
  }
  
  /* Team Card */
  .team-card {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  }
  .team-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* Timeline */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .timeline-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
    border-left: 5px solid #27AE60;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  }
  </style>
  