import ApiClient from '../client/api'

const AuthService = {
  async login () {
    // todo: implement logic to sing in with google
    const res = await ApiClient.get('/auth/sessions/google_sing_in')
    return res
  }
}

export default AuthService
