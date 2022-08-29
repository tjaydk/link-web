<script>
export default {
  name: 'AuModal'
}
</script>

<template>
  <div class="au-modal">
    <div class="au-modal__content">
      <slot name="header">
        Header
      </slot>
      <slot name="body">
        Body
      </slot>
      <slot name="control">
        <button>Click me</button>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuModal';
</style>
