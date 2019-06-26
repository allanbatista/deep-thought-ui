/**
 * Interact with `localStorage` through `JWT_TOKEN_KEY`
 */
const JwtService = {
  setToken (token) {
    localStorage.setItem(process.env.JWT_TOKEN_KEY, token)
  },
  getToken () {
    return localStorage.getItem(process.env.JWT_TOKEN_KEY)
  },
  removeToken () {
    localStorage.removeItem(process.env.JWT_TOKEN_KEY)
  }
}

export default JwtService
