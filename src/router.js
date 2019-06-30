import Vue from 'vue'
import VueRouter from 'vue-router'

// store
import store from './store'

// Layouts
import Auth from '@/components/layouts/Auth.vue'
import UnAuth from '@/components/layouts/UnAuth.vue'

// actions
import { AUTO_LOGIN } from './store/auth.actions'
import { SHOW_MESSAGE_ERROR } from './store/message.actions'

Vue.use(VueRouter)

// Create router instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Auth,
      children: [{
        path: '/',
        name: 'dashboard',
        meta: { title: 'Dashboard', auth: true },
        component: () => import('./components/views/Dashboard')
      }]
    },
    {
      path: '',
      component: UnAuth,
      children: [
        {
          name: 'login',
          path: '/login',
          meta: { title: 'Login', auth: false },
          component: () => import('./components/views/auth/Login.vue')
        },
        {
          name: 'logout',
          path: '/logout',
          meta: { title: 'Logout', auth: false },
          component: () => import('./components/views/auth/Logout')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Custom title for page, if exists
  // otherwise use default 'Transparência na Pesagem'
  document.title = `Deep Throught | ${to.meta.title || ''}`

  // Check if route requires authentication
  // If it requires, redirect to Login
  // If not, let to pass
  let nextPath = {}
  if (to.matched.some(record => record.meta.auth)) {
    store
      .dispatch(AUTO_LOGIN)
      .then(() => {
        if (!store.getters.isAuthenticated) {
          nextPath = { name: 'login' }
        }
      })
      .catch(err => {
        store.dispatch(SHOW_MESSAGE_ERROR, err)
      })
  } else {
    next(nextPath)
  }
})

export default router
