import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'
import api from './service/index'

const app = createApp(App)

app.config.globalProperties.$axios = api;

let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
app.use(router)

app.mount('#app')


