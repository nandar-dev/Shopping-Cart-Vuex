import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3StarRatings from "vue3-star-ratings";

createApp(App).component("vue3-star-ratings", vue3StarRatings).use(store).use(router).mount('#app')
