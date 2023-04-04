import { createApp } from 'vue'
import router from './router'
import '@/assets/styles/main.scss'
import '@/assets/styles/forms.scss'
import App from './App.vue'


createApp(App)
  .use(router)
  .mount('#app');
  
