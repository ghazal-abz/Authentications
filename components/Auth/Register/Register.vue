<template>
  <div>
    <div class="auth-card__title mb-5 d-flex justify-space-between align-center">
      <h1>{{ $t('register.title') }}</h1>

      <div @click="toLastLink" class="cursor-pointer">
        <i class="icon icon-left icon-24" />
      </div>
    </div>

    <v-form ref="registerForm" @submit.prevent="register" autocomplete="off">
      <text-field
        v-model="username"
        autocomplete="off"
        :placeholder="$tc('register.userNamePlaceHolder')"
        :rules="[rules.requiredRule]"
        :title="$tc('register.userName')"
        hint-star
      />

      <text-field
        v-model="email"
        autocomplete="off"
        :placeholder="$tc('register.email')"
        :rules="[rules.requiredRule, rules.emailRule]"
        :title="$tc('register.gmail')"
        hint-star
        text-left
      />

      <text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password]"
        :type="show1 ? 'text' : 'password'"
        :title="$tc('register.password')"
        @click:append="show1 = !show1"
        :hint="$tc('setPass.passwordHint')"
        persistent-hint
        hint-star
        text-left
      ></text-field>

      <text-field
        v-model="confirmPassword"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.password]"
        :type="show2 ? 'text' : 'password'"
        :title="$tc('register.confirmPassword')"
        @click:append="show2 = !show2"
        hint-star
        text-left
      />

      <span v-show="!isMatch" class="error-text">
        {{ $tc('auth.password') }}
      </span>

      <text-field
        v-model="code"
        autocomplete="off"
        :placeholder="$tc('register.introducePlaceHolder')"
        :title="$tc('register.introduceCode')"
      />

      <check-box
        v-model="remember"
        :rules="[rules.requiredRule]"
        :label="$tc('register.confirmation')"
        class="align-center"
      >
        <template v-slot:label>
          <span v-html="$tc('register.confirmation')" />
        </template>
      </check-box>

      <t-btn class="main__btn" type="submit" block color="#CDA876" :disabled="isDisable">
        <span>{{ $t('register.submit') }}</span>
      </t-btn>
    </v-form>

    <t-btn class="main__btn mt-4" type="submit" outlined block color="#CDA876">
      <i class="icon icon-20 icon-google ml-2" />
      <span>{{ $t('register.googleBtn') }}</span>
    </t-btn>
  </div>
</template>

<script>
import Validators from '~/utils/validators'
import TBtn from '@/components/UI/Form/TBtn'
import TextField from '~/components/UI/Form/TextField'
import CheckBox from '@/components/UI/Form/CheckBox'

export default {
  name: 'Register',
  components: {
    TBtn, TextField, CheckBox
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      code: '',
      loading: false,
      remember: false,
      show1: true,
      show2: true,
      rules: {
        requiredRule: Validators(this.$i18n).requiredRule,
        emailRule: Validators(this.$i18n).emailRule,
        password: Validators(this.$i18n).passwordRule
      }
    }
  },
  computed: {
    isMatch() {
      return this.password === this.confirmPassword
    },
    isDisable() {
      return !this.password || !this.confirmPassword || !this.username || !this.email
    }
  },
  methods: {
    toLastLink() {
      this.$router.go(-1);
    },
    register() {
      if (this.$refs.registerForm.validate()) {
        this.loading = true
        this.$emit('code-sent', {
          email: this.email
        })
        this.$emit('next-step', 'get-code')
      }
    }
  }
}
</script>
