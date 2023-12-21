import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useRoute } from 'vue-router'
import './registerServiceWorker'
import './css/index.css'

const pinia = createPinia()
const app = createApp(App);

app.use(useRoute).use(router).use(pinia).mount('#app')