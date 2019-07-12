import VueRouter from 'vue-router'
import { createLocalVue, shallowMount } from '@vue/test-utils'

// coponents
import Login from '@/components/views/auth/Login.vue'
import GoogleSingInButton from '@/components/ui/buttons/GoogleSingInButton.vue'
import LoginCard from '@/components/ui/cards/LoginCard.vue'

const localVue = createLocalVue()
const router = new VueRouter()

localVue.use(VueRouter)

describe('Login.vue', () => {
  const wrapper = shallowMount(Login, {
    localVue,
    router,
    computed: {
      isAuthenticated: () => false
    }
  })

  it('should contain LoginCard', () => {
    expect(wrapper.find(LoginCard).exists()).toBeTruthy()
  })

  it('should contain GoogleSingInButton', () => {
    expect(wrapper.find(GoogleSingInButton).exists()).toBeTruthy()
  })
})
