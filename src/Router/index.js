import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/auth/Register.vue"
import Careers from "../components/Careers/Careers.vue";
import Login from "../components/auth/Login.vue";
import About from "../components/Home/About/About.vue";
import ForgetPassword from "../components/auth/ForgetPassword.vue"
import Home from "../Views/Home.vue";
import Index from "../components/Dashboard/Index.vue";
import CompleteLogin from "../components/auth/CompleteLogin.vue";
import Bio from "../components/auth/Bio.vue";
import Services from '../Views/Services/index.vue'
import ComprehensiveService from "../components/Home/services/ComprehensiveService.vue";
import Resources from "../components/Home/Resources.vue";
import Blogs from "../components/Home/Blogs.vue";

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
    path:'/completeLogin',
    name:'completeLogin',
    component:CompleteLogin
  },
  {
    path:'/bio',
    name:'bio',
    component:Bio
  },
  {
    path:'/forgot-password',
    name:'forget-password',
    component:ForgetPassword
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
  {
    path:'/dashboard',
    name:'dashboard',
    component:Index
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
    
  },
  {
    path: '/services/comprehensive-services', // ✅ Separate top-level route
    name: 'comprehensive-services',
    component: ComprehensiveService
  },
  {
    path: '/resources', // ✅ Separate top-level route
    name: 'resources',
    component: Resources
  },
  {
    path:'/blogs',
    name:'blogs',
    component:Blogs
  }
 
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
