import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";

const routerHistory = createWebHistory()

let router = createRouter({
    history: routerHistory,
    routes,
    base: '/',
})

router.beforeEach((to, from, next) => {
    console.log(to, from)
    if (!localStorage.getItem("access_token") && to.name !== 'login') {
        next({name: 'login'})
        alert("Login first!")
    } else {
        next()
    }
})

export default router
