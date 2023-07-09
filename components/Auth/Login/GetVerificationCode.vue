<template>
  <div>
    <div class="auth-card__title mb-6">
      <h1>{{ $t('login.title') }}</h1>
    </div>


    <v-form ref="verificationForm" @submit.prevent="submit" autocomplete="off">
      <text-field
        v-model="otp"
        autocomplete="off"
        :rules="[rules.requiredRule]"
        :title="$tc('login.otp')"
        hint-star
      />

      <t-btn class="main__btn" type="submit" block color="#CDA876">
        <span>{{ $t('login.enter') }}</span>
      </t-btn>
    </v-form>
  </div>
</template>

<script>
import TBtn from '@/components/UI/Form/TBtn'
import Validators from "~/utils/validators";
import TextField from '~/components/UI/Form/TextField'

export default {
  name: 'LoginGetVerificationCode',
  components: {
    TBtn,
    TextField
  },
  data() {
    return {
      otp: '',
      rules: {
        requiredRule: Validators(this.$i18n).requiredRule
      }
    }
  },
  methods: {
    submit() {
      //enter to dashboard
    }
  }
}
</script>
