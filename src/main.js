import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import swipe from './swipe/swipe'
import './assets/reset.css'

createApp(App).use(router).use(store).use(swipe, {
    swipeTolerance: 100
}).mount('#app')
