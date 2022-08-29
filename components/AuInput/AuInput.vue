<script>
export default {
  name: 'AuInput',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      validator: val => ['text', 'password', 'email', 'url'].includes(val),
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showPass: false
    }
  },
  computed: {
    getType () {
      return this.type === 'password' ? this.showPass ? 'text' : 'password' : this.type
    }
  }
}
</script>

<template>
  <div class="au-input">
    <input
      :value="value"
      :type="getType"
      :placeholder="placeholder"
      :disabled="disabled"
      class="au-input__input"
      @input="$emit('input', $event.target.value)"
      @cancel="$emit('cancel')"
      @close="$emit('close')"
      @abort="$emit('abort')"
    >
    <div v-if="icon" class="au-input__icon" @click="$emit('action')">
      <font-awesome-icon :icon="icon" class="au-input__icon-svg" />
    </div>
    <div v-if="clearable && value" class="au-input__icon" @click="$emit('input', '')">
      <font-awesome-icon icon="x" class="au-input__icon-svg" />
    </div>
    <div v-if="type === 'password'" class="au-input__icon" @click="showPass = !showPass">
      <font-awesome-icon v-show="showPass" icon="eye" class="au-input__icon-svg" />
      <font-awesome-icon v-show="!showPass" icon="eye-slash" class="au-input__icon-svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuInput';
</style>
