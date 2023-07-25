import { createApp } from 'vue'
import App from './App.vue'
import router from '@/components/router'
import { store } from './components/store'
import '@/theme.css'


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
