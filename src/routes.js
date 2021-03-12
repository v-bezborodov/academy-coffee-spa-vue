import LoginComponent from './components/login/Login.component'
import RegisterComponent from './components/register/Register.component'
import DashboardComponent from './components/dashboard/Dashboard.component'
import RegisterCustomer from './components/register/customer/RegisterCustomer.component'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/dashboard', component: DashboardComponent },
    { path: '/register-customer', component: RegisterCustomer },
]
