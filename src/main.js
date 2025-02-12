import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router';
import store from './store'
import 'remixicon/fonts/remixicon.css';

createApp(App).use(store).use(router).mount('#app')


