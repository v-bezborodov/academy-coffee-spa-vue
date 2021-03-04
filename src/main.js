import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

const app = createApp(App)

let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
app.use(router)

app.mount('#app')


