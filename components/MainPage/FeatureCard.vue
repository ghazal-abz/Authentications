<template>
  <v-row class="d-flex justify-center items-center">
    <v-col
      v-for="(item, index) in data"
      :key="index"
      cols="6"
      :md="$vuetify.breakpoint.mobile? 6 : 3"
      sm="6"
      class="card-container"
      :class="item.status ? 'active' : 'deActive'"
    >
      <v-tooltip color="#FFCA28" max-width="222" top content-class="text-center">
        <template v-slot:activator="{ on, attrs }">
          <div class="card-container__bg bg-color" v-bind="attrs" v-on="item.status ? '': on">
            <i class="icon icon-50" :class="item.icon" />

            <h3>{{ item.title }}</h3>
          </div>
        </template>

        <span
          v-if="!item.status"
          v-html="$t('cards.soon')"
        ></span>
      </v-tooltip>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}

</script>


<style lang="scss">
.v-tooltip__content {
  color: #000;
  margin-top: 5%;
  margin-right: 25%;
  border-radius: 10px 10px 0 10px;
}
.card-container {
  padding: 0 5px;
  max-width: 200px;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding: 5px;
  }

  &.active {
    cursor: pointer;

    & .bg-color {
      background: linear-gradient(180deg, #1F3C5C 0%, #496F89 100%);
    }

    & h3 {
      color: #fff;
    }
  }

  &.deActive {
    cursor: none;

    & .bg-color {
      background: rgba(230, 232, 235, 1);
    }

    & h3 {
      color: #9CA5AF;
    }
  }

  &__bg {
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }

  h3 {
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>
