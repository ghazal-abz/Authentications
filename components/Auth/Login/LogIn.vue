<template>
  <div>
    <div class="auth-card__title mb-6">
      <h1>{{ $t('login.title') }}</h1>
    </div>

    <v-form ref="loginForm" @submit.prevent="logInWithEmail" autocomplete="off">
      <text-field
        v-model="email"
        autocomplete="off"
        :placeholder="$tc('login.email')"
        :rules="[rules.requiredRule, rules.emailRule]"
        :title="$tc('login.gmail')"
        hint-star
        text-left
      />
      <text-field
        v-model="password"
        autocomplete="off"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password]"
        :type="show1 ? 'text' : 'password'"
        :title="$tc('login.password')"
        @click:append="show1 = !show1"
        persistent-hint
        hint-star
        text-left
      ></text-field>

      <check-box
        v-model="remember"
        class="align-center"
      >
        <template v-slot:label>
          <span v-html="$tc('login.rememberMe')" />
        </template>
      </check-box>

      <t-btn class="main__btn" type="submit" block color="#CDA876">
        <span>{{ $t('login.btn') }}</span>
      </t-btn>
    </v-form>

    <t-btn class="main__btn mt-4" type="submit" outlined block color="#CDA876">
      <i class="icon icon-20 icon-google ml-2" />
      <span>{{ $t('login.googleBtn') }}</span>
    </t-btn>

    <div class="auth-card__text-info d-block mt-3">
      <span>{{ $t('login.forget') }}
       <nuxt-link to="/forget-password" class="link">
            {{ $t('login.click') }}
       </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
import Validators from '~/utils/validators'
import TBtn from '~/components/UI/TBtn'
import TextField from '~/components/UI/Form/TextField'
import CheckBox from '~/components/UI/CheckBox'

export default {
  name: 'LogIn',
  components: {
    TBtn, TextField, CheckBox
  },
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      remember: false,
      show1: false,
      rules: {
        requiredRule: Validators(this.$i18n).requiredRule,
        emailRule: Validators(this.$i18n).emailRule,
        password: Validators(this.$i18n).passwordRule
      }
    }
  },
  methods: {
    logInWithEmail() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true
        this.$emit('next-step', 'get-code')
      }
    }
  }
}
</script>
