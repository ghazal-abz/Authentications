<template>
  <div class="auth-card h-100">
    <transition-group mode="out-in">
      <log-in
        v-if="step === 'login'"
        key="login"
        @next-step="goToStep"
      />

      <get-verification-code
        v-if="step === 'get-code'"
        key="get-code"
        @next-step="goToStep"
      />
    </transition-group>
  </div>
</template>

<script>
import LogIn from '~/components/Auth/Login/LogIn'
import GetVerificationCode from '~/components/Auth/Login/GetVerificationCode'

export default {
  layout: 'auth',
  components: {
    LogIn,
    GetVerificationCode
  },
  data() {
    return {
      step: 'login',
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
