<template>
  <v-btn
    v-on="$listeners"
    class="btn-component"
    :block="block"
    :loading="loading"
    :disabled="disabled"
    :outlined="outlined"
    :plain="plain"
    :small="small"
    :large="large"
    :text="text"
    :type="type"
    :min-width="minWith"
    :width="width"
    :max-width="maxWidth"
    :to="to"
    :href="href"
    :target="target"
    :color="color"
    :value="value"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'TBtn',
  props: {
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'primary'
    },
    noGutters: {
      type: Boolean,
      default: false
    },
    minWith: {
      type: [Number, String],
      default: 10
    },
    width: [Number, String],
    maxWidth: [Number, String],
    to: [Object, String],
    href: [Object, String],
    target: undefined,
    value: null
  }
}
</script>

<style lang="scss">
.btn-component {
  /* general */
  &.v-btn {
    box-shadow: none;
    transition: all 0.2s ease-in-out;
    font-family: $body-font-family !important;
    letter-spacing: 0;
    width: 100%;
    color: white !important;

    &.is-disabled-primary.v-btn--disabled.v-btn--has-bg {
      background-color: $primary !important;

      .v-btn__content {
        color: $white;
      }
    }

    &.v-btn--outlined {
      border: 1px solid $blueGray !important;
      color: $blueGray !important;

      &.primary--text {
        color: $black !important;

        &:hover {
          border: 1px solid $black !important;

          .v-btn__content {
            color: $primary !important;
          }
        }
      }

      &:before {
        background-color: transparent !important;
      }
    }

    &:hover:before {
      background-color: transparent !important;
    }

    .v-btn--text {
      color: $primary !important;
    }

    &:before {
      background-color: transparent !important;
    }

    &.primary {
      background-color: $primary !important;

      &:hover {
        background-color: $primary !important;
      }

      .v-btn--disabled {
        background-color: $gray !important;

        .v-btn__content {
          color: $white !important;
        }
      }
    }
  }

  /* large */
  &.v-btn.v-size--default {
    border-radius: 10px;
    height: 50px;
  }
}
</style>
