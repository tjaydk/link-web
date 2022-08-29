<script>
export default {
  name: 'AuImageSlider',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      interval: null,
      index: 0
    }
  },
  mounted () {
    this.interval = setInterval(this.intervalHandler, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    intervalHandler () {
      this.index = (this.index + 1) % this.images.length
    }
  }
}
</script>

<template>
  <div class="au-image-slider">
    <div class="au-image-slider__content">
      <div
        v-for="(image, i) in images"
        v-show="index === i"
        :key="image.url"
        class="au-image-slider__body"
      >
        <img :src="image.url" :alt="image.url" class="au-image-slider__body-image">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "AuImageSlider";
</style>
