import Vue from 'vue'
import Vuex from 'vuex'

// modules
import auth from './auth.module'
import message from './message.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    message
  },
  strict: process.env.NODE_ENV !== 'production'
})
