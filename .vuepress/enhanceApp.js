import auth from './auth'

const Callback = () => import('./components/Callback')
const Login = () => import('./components/Login')
const Logout = () => import('./components/Logout')

export default ({Vue, options, router}) => {
  Vue.prototype.$auth = auth
  router.addRoutes([
    {path: '/callback', component: Callback},
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
  ])
}
