import LoginPageComponent from '../pages/login/LoginPage.component'
import RegisterPageComponent from '../pages/register/Register.component'
import DashboardPageComponent from '../pages/user/UserPage.component'
import RegisterCustomerPageComponent from '../pages/customer/RegisterCustomerPage.component'
import HomePageComponent from '../pages/home/HomePage.component'
import UserEditPageComponent from '../pages/user/edit/UserEditPage.component'
import CategoryPageComponent from '../pages/category/CategoryPage.component'
import PostPageCategoryComponent from '../pages/post/PostPage.component'
import PostEditPageComponent from '../pages/post/edit/PostEditPage.component'
import UserPageComponent from '../pages/user/UserPage.component'

let routes = [
    {path: '/', name: 'Home', component: HomePageComponent},
    {path: '/login', name: 'Login', component: LoginPageComponent},
    {path: '/register', name: 'Register', component: RegisterPageComponent},
    {path: '/dashboard', name: 'Dashboard', component: DashboardPageComponent},
    {path: '/dashboard/category', name: 'Category', component: CategoryPageComponent},
    {path: '/dashboard/post', name: 'Post', component: PostPageCategoryComponent},
    {path: '/dashboard/post/edit/:post', name: 'Edit-post', component: PostEditPageComponent, props: true},
    {path: '/dashboard/user', name: 'User', component: UserPageComponent},
    {path: '/dashboard/user/edit/:user', name: 'Edit-user', component: UserEditPageComponent, props: true},
    {path: '/register-customer', name: 'Register-customer', component: RegisterCustomerPageComponent},
]

export default routes