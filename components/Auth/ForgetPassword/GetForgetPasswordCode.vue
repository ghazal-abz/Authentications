<template>
  <div>
    <div class="auth-card__title mb-6">
      <h1>{{ $t('forgetPass.title') }}</h1>
    </div>

    <div class="auth-card__sub-title mb-6">
      <h2> {{ $t('forgetPass.getCode', {email: this.userData.email}) }}</h2>
    </div>

    <v-form ref="getCodeForm" @submit.prevent="submit" autocomplete="off">
      <text-field
        v-model="code"
        autocomplete="off"
        :rules="[rules.requiredRule]"
        :title="$tc('login.code')"
        hint-star
      />

      <t-btn class="main__btn" type="submit" block color="#CDA876">
        <span>{{ $t('forgetPass.next') }}</span>
      </t-btn>
    </v-form>

    <div class="auth-card__text-info d-block mt-3">
      <span>{{ $t('forgetPass.confirmCode') }}
        <span @click="submit" class="link">
        {{ $t('forgetPass.resend') }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import TBtn from '~/components/UI/TBtn'
import Validators from "~/utils/validators";
import TextField from '~/components/UI/Form/TextField'

export default {
  name: 'GetForgetPasswordCode',
  components: {
    TBtn,
    TextField
  },
  props: {
    userData: {
      type: Object,
      required: true,
      default() {
        return {
          email: '',
          path: ''
        }
      }
    }
  },
  data() {
    return {
      code: '',
      rules: {
        requiredRule: Validators(this.$i18n).requiredRule
      }
    }
  },
  methods: {
    submit() {
      if (this.code) {
        this.$emit('next-step', 'set-password')
      }
    }
  }
}
</script>
