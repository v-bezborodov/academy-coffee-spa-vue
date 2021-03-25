import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";

const routerHistory = createWebHistory()

let router = createRouter({
    history: routerHistory,
    routes: routes,
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem("access_token") && to.name !== 'login' && to.name !== 'register') {
        next({name: 'login'})
        alert("Login first!")
    } else {
        next()
    }
})

export default router
