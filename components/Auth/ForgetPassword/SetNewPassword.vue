<template>
  <div>
    <div class="auth-card__title mb-6">
      <h1>{{ $t('setPass.title') }}</h1>
    </div>

    <div class="auth-card__sub-title mb-6">
      <h2>{{ $t('setPass.subTitle') }}</h2>
    </div>

    <v-form ref="setPassForm" @submit.prevent="submit" autocomplete="off">
      <text-field
        v-model="password"
        autocomplete="off"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password]"
        :type="show1 ? 'text' : 'password'"
        :title="$tc('setPass.password')"
        :hint="$tc('setPass.passwordHint')"
        @click:append="show1 = !show1"
        persistent-hint
        hint-star
        text-left
      ></text-field>
      <text-field
        v-model="confirmPassword"
        autocomplete="off"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password]"
        :type="show2 ? 'text' : 'password'"
        :title="$tc('setPass.confirmPassword')"
        @click:append="show2 = !show2"
        persistent-hint
        hint-star
        text-left
      ></text-field>
      {{confirmPassword}}

      <span v-show="!isMatch" class="error-text">
        {{$tc('auth.password')}}
      </span>

      <t-btn class="main__btn" type="submit" block color="#CDA876" :disabled="!isMatch">
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
  name: 'SetNewPassword',
  components: {
    TBtn,
    TextField
  },
  data() {
    return {
      password: '',
      confirmPassword: '',
      show1: false,
      show2: false,
      rules: {
        requiredRule: Validators(this.$i18n).requiredRule,
        password: Validators(this.$i18n).passwordRule
      }
    }
  },
  computed: {
    isMatch() {
      if (this.confirmPassword) {
        return this.password === this.confirmPassword
      }
    }
  },
  methods: {
    submit() {
    }
  }
}
</script>
