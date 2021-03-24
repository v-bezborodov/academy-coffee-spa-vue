import LoginComponent from './pages/login/LoginPage.component'
import RegisterComponent from './pages/register/Register.component'
import DashboardComponent from './pages/dashboard/DashboardPage.component'
import RegisterCustomer from './pages/customer/RegisterCustomerPage.component'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/login', component: LoginComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/dashboard', component: DashboardComponent },
    { path: '/register-customer', component: RegisterCustomer },
]
