import LoginPageComponent from '../pages/login/LoginPage.component'
import RegisterPageComponent from '../pages/register/Register.component'
import DashboardPageComponent from '../pages/dashboard/DashboardPage.component'
import RegisterPageCustomer from '../pages/customer/RegisterCustomerPage.component'
import HomePageComponent from '../pages/home/HomePage.component'
import UserEditPageComponent from '../pages/user/edit/UserEditPage.component'

let routes = [
    {path: '/', name: 'home', component: HomePageComponent},
    {path: '/login', name: 'login', component: LoginPageComponent},
    {path: '/register', name: 'register', component: RegisterPageComponent},
    {path: '/dashboard', name: 'dashboard', component: DashboardPageComponent},
    {path: '/register-customer', name: 'register-customer', component: RegisterPageCustomer},
    {path: '/user/edit/:user', name: 'edit-user', component: UserEditPageComponent, props: true},
]

export default routes