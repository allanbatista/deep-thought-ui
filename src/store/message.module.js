import {
  SHOW_MESSAGE_SUCCESS,
  SHOW_MESSAGE_ERROR,
  CLEAR_MESSAGES
} from './message.actions'

const baseState = {
  message: {
    error: '',
    success: ''
  }
}

const state = { ...baseState }

const getters = {
  errorMessage: () => state.message.error,
  sucessMessage: () => state.message.success
}

const actions = {
  [SHOW_MESSAGE_SUCCESS] ({ commit }, { message }) {
    commit('setMessage', { type: 'success', message })
  },
  [SHOW_MESSAGE_ERROR] ({ commit }, { message }) {
    commit('setMessage', { type: 'error', message })
  },
  [CLEAR_MESSAGES] ({ commit }) {
    commit('clearMessages')
  }
}

const mutations = {
  setMessage (state, { type, message }) {
    state.message[type] = message
  },
  clearMessage (state) {
    state.message = baseState.message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
