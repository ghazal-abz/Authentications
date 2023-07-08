<template>
  <v-checkbox
    @change="changed"
    class="checkbox-component"
    :color="color"
    :error="error"
    :label="label"
    :on-icon="onIcon"
    :off-icon="offIcon"
    :rules="rules"
    :true-value="trueValue"
    :false-value="falseValue"
  >
    <template v-slot:label>
      <slot name="label" />
    </template>
  </v-checkbox>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    error: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: [String],
    label: [String],
    trueValue: null,
    falseValue: null,
    value: null
  },
  data() {
    return {
      onIcon: 'icon icon-checkbox-on-light icon-20',
      offIcon: ''
    }
  },
  methods: {
    changed(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.checkbox-component {
  margin: 0 0 20px 0;
  padding: 0 !important;

  .v-label {
    a {
      color: $primary !important;
    }
  }

  .v-input--selection-controls__input {
    min-width: 16px !important;
    min-height: 16px !important;
    border: 1px solid #CED2D7 !important;
    border-radius: 4px !important;

  }

  &.v-input--is-label-active {
    .v-input--selection-controls__input {
      background-color: white !important;
    }
  }

  label {
    font-size: 16px !important;
    font-weight: 400 !important;
    color: $text1 !important;
    text-align: right !important;
    margin-right: 0;
  }
}
</style>
