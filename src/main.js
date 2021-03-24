import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router'
import axios from './service/index'
import api from './service/api/index'
import store from "./store"

const app = createApp(App)

app.provide('api', api);
app.use(router, axios)
app.use(store)

app.mount('#app')


