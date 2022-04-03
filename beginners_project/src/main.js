import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

createApp(App)
  .use(Vuelidate)
  .use(router).mount('#app')
