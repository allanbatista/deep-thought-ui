<script>
import { LOGOUT } from '@/store/auth.actions'

export default {
  beforeMount () {
    this.$store.dispatch(LOGOUT)
    this.$router.push({ name: 'login' })
  },
  // This component won't render any template
  render: () => ''
}
</script>
