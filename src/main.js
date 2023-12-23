import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useRoute } from 'vue-router'
import VueApexCharts from "vue3-apexcharts";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './registerServiceWorker'
import './css/index.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);

app.use(useRoute).use(router).use(pinia).use(VueApexCharts).mount('#app')