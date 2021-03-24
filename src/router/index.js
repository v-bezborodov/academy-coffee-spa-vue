import {createRouter, createWebHistory} from "vue-router";
import {routes} from "@/router/routes";

export let router = createRouter({
    history: createWebHistory(),
    routes: routes,
    base: '/',
})