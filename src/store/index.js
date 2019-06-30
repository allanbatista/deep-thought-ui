import Vue from 'vue'
import Vuex from 'vuex'

// modules
import auth from './auth.module'
import message from './message.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    message
  }
})

export default store
