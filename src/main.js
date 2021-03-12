import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'
import axios from './service/index'
import api from './service/api/index'
import store from "./store/index"

const app = createApp(App)

app.provide('api', api);

let router = createRouter({
    history: createWebHistory(),
    routes: routes,
    base: '/',
})

app.use(router, axios, store)

app.mount('#app')


