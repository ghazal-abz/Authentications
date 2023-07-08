<template>
  <v-app class="main">
    <v-row class="auth-container" no-gutters>
      <v-col cols="12" md="7" class="hero" :class="[isForgetPass ? 'forget-pass' : 'log-in', isRegister ? 'h-mobile': '']">
        <v-row class="img-container">
          <v-col cols="12" md="12">
            <div class="hero-main">
              <div class="d-flex align-center ml-4">
                <v-img :src="logo" />
              </div>
              <div class="hero-text">
                <h1>{{ $t('login.hero.title') }}</h1>

                <h2>{{ $t('login.hero.subTitle') }}</h2>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="12" class="page-link">
            <div class="page-link__box">
              <span>{{ isTwoLink ? $t('auth.registerTitle') : $t('auth.loginTitle') }}</span>
              <NuxtLink :to="isTwoLink ? '/register' : '/log-in'" class="link">
                {{ isTwoLink ? $t('auth.registerLink') : $t('auth.loginLink') }}
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5" class="form-container">
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import logo from '../assets/icons/main-logo.svg'

export default {
  name: 'auth',
  data() {
    return {
      logo
    }
  },
  computed: {
    isLogIn() {
      const route = this.$route.name

      return ['log-in'].includes(route)
    },
    isForgetPass() {
      const route = this.$route.name

      return ['forget-password'].includes(route)
    },
    isTwoLink() {
      const route = this.$route.name

      return ['forget-password','log-in'].includes(route)
    },
    isRegister() {
      const route = this.$route.name

      return ['register'].includes(route)
    }
  }
}
</script>

<style lang="scss" scoped>

.auth-container {
  display: flex;
  height: 100%;
  background-color: white;

  .form-container {
    padding: 30px;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      position: absolute;
      z-index: 10;
    }
  }

  .img-container {
    display: flex;
    height: 100%;

    .page-link {
      align-items: flex-end;
      display: flex;
      justify-content: center;

      &__box {
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.5);
        padding: 20px;
        font-size: 18px;
        font-weight: 600;

        & span {
          color: white;
        }

        .link {
          color: $primary;
        }
      }
    }
  }

  .hero {
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      position: relative;
      z-index: 1;
      justify-content: flex-end;
      align-items: flex-end;
    }

    &.h-mobile {
      @media #{map-get($display-breakpoints, 'md-and-down')} {
        height: 120vh !important;
      }
    }

    &.log-in {
      background-image: url("~/assets/img/login.png");
    }

    &.forget-pass {
      background-image: url("~/assets/img/forget-pass.png");
    }

    .hero-main {
      display: flex;
      flex-direction: row;
      margin: 80px 80px 0;

      .hero-text {
        color: $white;
        text-align: right;

        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          padding: 0 24px 80px;
        }

        & h1 {
          font-size: 40px;
          font-weight: 700;
          line-height: 60px;
          color: $yellow;

          @media #{map-get($display-breakpoints, 'sm-and-down')} {
            font-size: 26px;
            line-height: 25px;
          }
        }

        & h2 {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;

          @media #{map-get($display-breakpoints, 'sm-and-down')} {
            font-size: 14px;
            font-weight: 300;
            line-height: 13px;
          }
        }
      }
    }
  }

}
</style>
