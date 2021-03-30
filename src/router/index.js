import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes.js";

const routerHistory = createWebHistory()

let router = createRouter({
    history: routerHistory,
    routes: routes,
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem("access_token") && to.name !== 'Login' && to.name !== 'Register') {
        alert("Login first!")
        next({name: 'Login'})
    } else {
        next()
    }
})

export default router
