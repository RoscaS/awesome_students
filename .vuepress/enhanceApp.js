import auth from './auth'
import VTooltip from 'v-tooltip'
import Vuesax from 'vuesax'
import VCalendar from 'v-calendar'


import 'vuesax/dist/vuesax.css'
import 'v-calendar/lib/v-calendar.min.css'

const Callback = () => import('./components/Callback')
const Login = () => import('./components/Login')
const Logout = () => import('./components/Logout')

export default ({Vue, options, router}) => {
  Vue.use(VTooltip)
  Vue.use(Vuesax)
  Vue.prototype.$auth = auth
  Vue.use(VCalendar, {
    firstDayOfWeek: 2,  // Monday
    locale: 'fr'

  });
  router.addRoutes([
    {path: '/callback', component: Callback},
    {path: '/login', component: Login},
    {path: '/logout', component: Logout},
  ]);
}
