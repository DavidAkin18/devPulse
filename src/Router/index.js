import { createRouter, createWebHistory } from "vue-router";
import ComprehensiveService from "../components/Home/services/ComprehensiveService.vue";

import Register from "../components/auth/Register.vue"
import Careers from "../components/Careers/Careers.vue";
import Login from "../components/auth/Login.vue";
import About from "../components/Home/About/About.vue";
import Home from "../Views/Home.vue";


const routes = [
  { 
    path: "/", 
    name:'home',
    component: Home 
  },
  {
    path:'/register',
    name:'register',
    component: Register
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:"/about",
    name:'about',
    component:About
  },
  {
    path:'/careers',
    name:'careers',
    component: Careers
  },
  // {
  //   path:'/services',
  //   name:'services',
  //   component:Services
  // },
  {
    path:'/comprehensive-services',
    name:'comprehensive-services',
    component:ComprehensiveService
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
