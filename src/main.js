import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import '@/assets/scss/responsive.scss';
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
