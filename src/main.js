import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

store.dispatch('authenticate').then(() => {
    createApp(App).use(store).use(router).mount('#app')

    if (store.getters.dark && document.querySelector('body').classList.contains('coin-theme')) {
        document.querySelector('body').classList.add('dark')
    } else {
        document.querySelector('body').classList.remove('dark')
    }
})

// document.querySelector('body').classList.contains('coin-theme')