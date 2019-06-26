<script>
import { GET_USER, REMOVE_JWT_TOKEN } from '@/store/actions/auth'

export default {
  beforeCreate () {
    this.$state.dispatch(GET_USER).then(user => {
      if (!user.isAuthenticated) {
        this.state.dispatch(REMOVE_JWT_TOKEN)
        this.router.push('/login')
      }
    })
  }
}
</script>
