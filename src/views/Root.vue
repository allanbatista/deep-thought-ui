<script>
import { GET_USER, JWT_REMOVE_TOKEN } from '@/store/actions/auth'

export default {
  beforeCreate () {
    this.$state.dispatch(GET_USER).then(user => {
      if (!user.isAuthenticated) {
        this.state.dispatch(JWT_REMOVE_TOKEN)
        this.router.push('/login')
      }
    })
  }
}
</script>
