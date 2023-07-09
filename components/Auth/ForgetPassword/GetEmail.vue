<template>
  <div>
    <div class="auth-card__title mb-6">
      <h1>{{ $t('forgetPass.title') }}</h1>
    </div>

    <div class="auth-card__sub-title mb-6">
      <h2>{{ $t('forgetPass.subTitle') }}</h2>
    </div>

    <v-form ref="forgetPasswordForm" @submit.prevent="submit" autocomplete="off">
      <text-field
        v-model="email"
        autocomplete="off"
        :placeholder="$tc('login.email')"
        :rules="[rules.requiredRule, rules.emailRule]"
        :title="$tc('login.gmail')"
        text-left
      />

      <t-btn class="main__btn" type="submit" block color="#CDA876">
        <span>{{ $t('login.submit') }}</span>
      </t-btn>
    </v-form>
  </div>
</template>

<script>
import TBtn from '~/components/UI/TBtn'
import Validators from "~/utils/validators";
import TextField from '~/components/UI/Form/TextField'

export default {
  name: 'GetEmail',
  components: {
    TBtn,
    TextField
  },
  data() {
    return {
      email: '',
      rules: {
        requiredRule: Validators(this.$i18n).requiredRule
      }
    }
  },
  methods: {
    submit() {
      if (this.$refs.forgetPasswordForm.validate()) {
        this.$emit('code-sent', {
          email: this.email
        })
        this.$emit('next-step', 'get-forget-code')
      }
    }
  }
}
</script>
