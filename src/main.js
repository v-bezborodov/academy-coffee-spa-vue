import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from './service'
import api from './service/api'
import store from "./store"

const app = createApp(App)

app.provide('api', api);
app.use(router, axios)
app.use(store)

if(process.env.NODE_ENV==='development') app.config.devtools = true

app.mount('#app')


