import LoginComponent from './components/login/Login.component'
import RegisterComponent from './components/register/Register.component'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/dashboard', component: RegisterComponent },
]