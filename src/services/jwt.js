const tokenKey = process.env.VUE_APP_JWT_TOKEN_KEY

/**
 * Interact with `localStorage` through `VUE_APP_JWT_TOKEN_KEY`
 */
const JwtService = {
  setToken (token) {
    localStorage.setItem(tokenKey, token)
  },
  getToken () {
    return localStorage.getItem(tokenKey)
  },
  removeToken () {
    localStorage.removeItem(tokenKey)
  }
}

export default JwtService
