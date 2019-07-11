import GoogleSingInButton from '@/components/ui/buttons/GoogleSingInButton.vue'
import Login from '@/components/views/auth/Login.vue'
import { shallowMount } from '@vue/test-utils'

describe('Login.vue', () => {
  it('should render GoogleSingInButton', () => {
    const googleSingInButtonWrapper = shallowMount(GoogleSingInButton)
    const loginWrapper = shallowMount(Login, { components: { GoogleSingInButton } })
    expect(loginWrapper.text()).toMatch(googleSingInButtonWrapper.text())
  })
})
