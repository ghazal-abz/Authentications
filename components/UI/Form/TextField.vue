<template>
  <div>
    <span v-if="title" class="label" :class="{'hint-star': hintStar, 'disabled': disabled}">{{ title }}</span>
    <v-text-field
      :id="id"
      ref="field"
      @input="onInput"
      @click:append="toggleShow1"
      v-on="$listeners"
      :type="type"
      :disabled="disabled"
      :error-messages="errors"
      :full-width="fullWidth"
      :hint="hint"
      :large="large"
      :outlined="!notOutlined"
      :rules="rules"
      :persistent-hint="persistentHint"
      :append-icon="appendIcon"
      :placeholder="placeholder"
      :height="height"
      :value="value"
      class="text-field-component"
      :class="{'text-left': textLeft}"
      autocomplete="off"
      solo
    >
      <template v-slot:message="{message}">
        <div class="d-flex align-center">
          <div v-html="message" />
        </div>
      </template>

      <template v-slot:append>
        <slot name="append" />
      </template>

      <slot />
    </v-text-field>
  </div>
</template>

<script>

export default {
  name: 'TTextField',
  props: {
    toggleShow1: {
      type: Function,
      default: () => {},
    },
    large: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    hintStar: {
      type: Boolean,
      default: false
    },
    textLeft: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    notOutlined: {
      type: Boolean,
      default: false
    },
    persistentHint: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    errors: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: ''
    },
    height: [Number, String],
    hint: [String],
    id: [String],
    placeholder: [String],
    title: [String],
    value: null
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">

.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  height: 48px;
}

.text-field-component {
  &.text-left {
    .v-text-field__slot {
      input {
        text-align: left !important;
        direction: ltr !important;
      }
    }
  }

  .v-input__control > .v-input__slot {
    box-shadow: none;
    min-height: 10px;
    border-radius: 8px;
    margin-bottom: 2px;

    fieldset {
      border: 1px solid $gray !important;
    }

    & > .v-text-field__slot {
      input {
        color: $black;
        line-height: 49px;
        max-height: 49px;
        font-size: 18px;
        font-weight: 400;
        width: 100%;
        text-align: right;
        width: 100%;
        direction: rtl;

        &::-webkit-input-placeholder {
          color: #B5BBC3;
          font-size: 14px;
          font-weight: 400;

          @media #{map-get($display-breakpoints, 'sm-and-down')} {
            font-size: 12px;
          }
        }
      }
    }

    & > .v-input__append-inner {
      position: absolute;
      right: 5px;
      height: 100%;
      line-height: 70px;
      top: 0;
      margin: 0;
      padding: 0 6px;
      display: inline-flex;
      align-items: center;
      color: $text2 !important;
      z-index: 1;
      cursor: pointer;
    }
  }

  &.v-input--is-focused {
    .v-input__control > .v-input__slot {
      fieldset {
        border: 1px solid $secondary !important;
      }
    }
  }

  &.error--text {
    .v-input__slot {
      fieldset {
        border: 1px solid red !important;
      }
    }
  }

  .v-text-field__details {
    padding: 0 !important;
    margin-top: 1px;

    .v-messages__message {
      line-height: 16px;
      font-size: 11px;
      color: $text2;
      font-weight: 400;
      min-height: 16px;
    }

    .error--text {
      .v-messages__message {
        font-size: 12px;
        font-weight: 400 !important;
        color: red !important;

        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          font-size: 12px;
        }
      }
    }

  }
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
  box-shadow: none;
}

.v-input__icon--clear {
  display: none;
}

.label {
  display: block;
  justify-content: start;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 3px;
  margin-left: 0;
  width: max-content;
  color: $text2;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    font-size: 14px;
    margin-bottom: 8px;
  }

  &.hint-star:before {
    content: '*';
    position: absolute;
    color: #848E9B;
    left: -8px;
  }

  &.disabled {
    color: #DEDEDE !important;
  }
}
</style>
