import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router';
import 'remixicon/fonts/remixicon.css';

const app = createApp(App);
app.use(router); // Register router
app.mount('#app');

