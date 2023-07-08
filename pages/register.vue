<template>
  <div class="auth-card">
    <transition-group mode="out-in">
      <register
        v-if="step === 'register'"
        key="login"
        @code-sent="goToGetOtp"
        @next-step="goToStep"
      />

      <get-verification-code
        v-if="step === 'get-code'"
        key="get-code"
        @next-step="goToStep"
        :user-data="userData"
      />
    </transition-group>
  </div>
</template>

<script>
import Register from '~/components/Auth/Register/Register'
import GetVerificationCode from '~/components/Auth/Register/GetVerificationCode'

export default {
  layout: 'auth',
  components: {
    GetVerificationCode,
    Register
  },
  data() {
    return {
      step: 'register',
      userData: {
        email: '',
        path: ''
      }
    }
  },
  methods: {
    goToStep(data) {
      this.step = data
    },
    goToGetOtp(data) {
      this.userData = data
    }
  }
}
</script>
