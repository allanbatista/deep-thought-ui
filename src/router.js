import Vue from 'vue'
import Router from 'vue-router'

// store
import store from './store'

// Layouts
import Auth from '@/components/layouts/Auth.vue'
import UnAuth from '@/components/layouts/UnAuth.vue'

// actions
import { AUTO_LOGIN } from './store/auth.actions'
import { SHOW_MESSAGE_ERROR } from './store/message.actions'

Vue.use(Router)

// Create router instance
const router = new Router({
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
  document.title = `Deep Thought | ${to.meta.title || ''}`

  // Check if route requires authentication
  // If it requires, redirect to Login
  // If not, let to pass
  if (to.matched.some(record => record.meta.auth)) {
    store
      .dispatch(AUTO_LOGIN)
      .then(() => {
        if (!store.getters.isAuthenticated) {
          next({ name: 'login' })
        }
        next()
      })
      .catch(err => {
        store.dispatch(SHOW_MESSAGE_ERROR, err)
        next({ name: 'login' })
      })
  } else {
    next()
  }
})

export default router
