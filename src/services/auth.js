import ApiClient from '../client/api'

const AuthService = {
  async _serialize (data) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      avatarUrl: data.picture
    }
  },
  async login () {
    const res = await ApiClient.get('/user')
    return this._serialize(res.data)
  }
}

export default AuthService
