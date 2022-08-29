<script>
export default {
  name: 'AuListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<template>
  <div class="au-list-item">
    <div class="au-list-item__row">
      <div class="au-list-item__row-title">
        {{ item.title }}
      </div>
      <div class="au-list-item__row-description">
        {{ item.description }}
      </div>
      <div class="au-list-item__row-meta">
<!--        {{ item.price | currency }}-->
        <au-chart />
      </div>
    </div>
    <au-list-item-modal v-if="showModal" :item="item" @close="showModal = false" />
  </div>
</template>

<style lang="scss" scoped>
@import "AuListItem";
</style>
