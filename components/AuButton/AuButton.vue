<script>
export default {
  name: 'AuButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: val => ['default', 'indicator'].includes(val)
    },
    to: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<template>
  <button
    :class="[
      `au-button--${type}`,
      {'au-button--loading' : loading}
    ]"
    :disabled="disabled || loading"
    class="au-button"
    @click.prevent="handleClick"
  >
    <slot v-if="!loading" />
    <div v-else class="au-button__spinner">
      <div class="au-button__double-bounce1" />
      <div class="au-button__double-bounce2" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import 'AuButton';
</style>
