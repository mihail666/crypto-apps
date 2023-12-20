import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useRoute } from 'vue-router'
import './registerServiceWorker'
import './css/index.css'

createApp(App).use(useRoute).use(router).mount('#app')