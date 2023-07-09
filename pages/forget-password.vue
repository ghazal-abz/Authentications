<template>
  <div class="auth-card h-100">
    <transition-group mode="out-in">
      <get-password
        v-if="step === 'get-password'"
        key="get-password"
        @code-sent="goToGetOtp"
        @next-step="goToStep"
      />

      <get-forget-password-code
        v-if="step === 'get-forget-code'"
        key="get-forget-code"
        @next-step="goToStep"
        :user-data="userData"
      />

      <set-new-password
        v-if="step === 'set-password'"
        key="set-password"
        @next-step="goToStep"
      />
    </transition-group>
  </div>
</template>

<script>
import GetPassword from "@/components/Auth/ForgetPassword/GetEmail";
import GetForgetPasswordCode from "~/components/Auth/ForgetPassword/GetForgetPasswordCode";
import SetNewPassword from "~/components/Auth/ForgetPassword/SetNewPassword";

export default {
  layout: 'auth',
  components: {
    GetPassword,
    GetForgetPasswordCode,
    SetNewPassword
  },
  data() {
    return {
      step: 'get-password',
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
