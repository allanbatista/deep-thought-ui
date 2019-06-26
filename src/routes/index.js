import Vue from 'vue'
import Router from 'vue-router'

// store
import store from '@/store/index'

// Layouts
import Auth from '@/views/_layouts/Auth.vue'
import UnAuth from '@/views/_layouts/UnAuth.vue'

// Views
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

const authRoutes = [{
  path: '',
  component: Auth,
  children: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard', requireAuth: true }
  }]
}]

const unAuthRoutes = [{
  path: '',
  component: UnAuth,
  children: [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'Login', requireAuth: false }
  }]
}]

// Create router
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...authRoutes,
    ...unAuthRoutes
  ]
})

router.beforeEach((to, from, next) => {
  // Custom title for page, if exists
  // otherwise use default 'Transparência na Pesagem'
  document.title = `Deep Throught | ${to.meta.title || ''}`

  // get current route
  let nextTo = from.name

  // Check if route requires authentication
  // If it requires, redirect to Login
  // If not, let to pass
  if (to.matched.some(record => record.meta.requireAuth)) {
    // Check if user is not authenticated
    if (!store.getters.isAuthenticated) {
      // change route to login
      nextTo = 'login'
    }
  }
  // go to route
  next(nextTo)
})

export default router
