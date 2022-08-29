<script>
export default {
  name: 'IndexPage',
  transition: 'test'
}
</script>

<template>
  <div class="index-page">
    <div class="index-page__content">
      <au-list @create="$router.push('/create')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "index";
</style>
