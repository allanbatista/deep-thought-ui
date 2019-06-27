import Vue from 'vue'
import Router from 'vue-router'

// store
import store from '@/store/index'

// Layouts
import Auth from '@/components/layouts/Auth.vue'
import UnAuth from '@/components/layouts/UnAuth.vue'

// Views
import Dashboard from '@/components/views/Dashboard.vue'
import Login from '@/components/views/auth/Login.vue'

Vue.use(Router)

const authRoutes = [{
  path: '',
  component: Auth,
  children: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard', auth: true }
  }]
}]

const unAuthRoutes = [{
  path: '',
  component: UnAuth,
  children: [{
    name: 'login',
    path: '/login',
    component: Login,
    meta: { title: 'Login', auth: false }
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

  // Check if route requires authentication
  // If it requires, redirect to Login
  // If not, let to pass
  if (to.matched.some(record => record.meta.auth) && !store.getters.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
