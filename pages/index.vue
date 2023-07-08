<template>
  <v-row justify="center" dir="rtl" class="main-wrap">
    <v-col cols="12" class="main">
      <v-row>
        <v-col cols="6" class="main__btn d-flex justify-start pa-0">
          <t-btn class="button pa-0" to="/log-in" text color="#CDA876" :width="140" small>
            <i class="icon icon-24 icon-user mb-2" />
            <span class="mr-1">{{ $t('main.logIn') }}</span>
          </t-btn>
        </v-col>
        <v-col cols="6" class="main__cancel d-flex align-start justify-end pa-0">
          <t-btn class="button pa-0" to="/" text color="#000" :width="70" small>
            <span class="mr-1">{{ $t('main.cancel') }}</span>
          </t-btn>
        </v-col>

        <v-col cols="12" class="pt-0">
          <div>
            <h1 class="main__welcome">{{ $t('main.welcome') }}</h1>
          </div>
          <div class="main__first-quote">{{ $t('main.quote') }}</div>
          <div class="main__second-quote">{{ $t('main.quote2') }}</div>
        </v-col>

        <v-col cols="12" class="mt-2">
          <feature-card :data="cardItems" />
        </v-col>

        <v-col cols="12" class="mt-1">
          <Familiarity />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import TBtn from '~/components/UI/TBtn'
import Familiarity from '~/components/MainPage/Familiarity'
import FeatureCard from '~/components/MainPage/FeatureCard'


export default {
  name: 'IndexPage',
  components: {
    TBtn,
    Familiarity,
    FeatureCard,
  },
  data() {
    return {
      cardItems: [
        {
          title: this.$i18n.t('cards.TradeDashboard'),
          icon: 'icon-trade-dashboard',
          status: true
        },
        {
          title: this.$i18n.t('cards.IntelligentSignal'),
          icon: 'icon-intelligent-signal',
          status: true
        },
        {
          title: this.$i18n.t('cards.RobotTrade'),
          icon: 'icon-robot-trade',
          status: true
        },
        {
          title: this.$i18n.t('cards.CopyTrade'),
          icon: 'icon-copy-trade',
          status: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrap {
  height: 100%;
}

.main {
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  padding: 35px;
  height: 100%;

  &__btn {
    height: 30px;

    .button {
      color: $primary !important;
      font-weight: 600;
      font-size: 18px;
    }
  }

  &__cancel {
    color: $text1;
    font-weight: 600;
    font-size: 18px;
    height: 30px;

    .button {
      color: #000 !important;
      font-weight: 600;
      font-size: 18px;
    }
  }

  &__welcome {
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: 700;
    color: #4CC1B0;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      margin-top: 20px;
    }
  }

  &__first-quote {
    display: flex;
    justify-content: center;
    color: $text1;
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      margin-top: 30px;
    }
  }

  &__second-quote {
    display: flex;
    justify-content: center;
    color: $text1;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      margin-top: 20px;
    }
  }

}
</style>
