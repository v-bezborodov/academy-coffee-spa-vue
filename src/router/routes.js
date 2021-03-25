import LoginPageComponent from '../pages/login/LoginPage.component'
import RegisterPageComponent from '../pages/register/Register.component'
import DashboardPageComponent from '../pages/user/UserPage.component'
import RegisterCustomerPageComponent from '../pages/customer/RegisterCustomerPage.component'
import HomePageComponent from '../pages/home/HomePage.component'
import UserEditPageComponent from '../pages/user/edit/UserEditPage.component'
import CategoryPageComponent from '../pages/category/CategoryPage.component'
import PostPageCategoryComponent from '../pages/post/PostPage.component'
import UserPageComponent from '../pages/user/UserPage.component'

let routes = [
    {path: '', name: 'Home', component: HomePageComponent},
    {path: '/login', name: 'login', component: LoginPageComponent},
    {path: '/register', name: 'register', component: RegisterPageComponent},
    {path: '/dashboard', name: 'dashboard', component: DashboardPageComponent},
    {path: '/dashboard/category', name: 'Category', component: CategoryPageComponent},
    {path: '/dashboard/post', name: 'Post', component: PostPageCategoryComponent},
    {path: '/dashboard/user', name: 'User', component: UserPageComponent},
    {path: '/dashboard/edit/:user', name: 'edit-user', component: UserEditPageComponent, props: true},
    {path: '/register-customer', name: 'register-customer', component: RegisterCustomerPageComponent},

]

export default routes