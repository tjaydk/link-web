<script>
import VClamp from 'vue-clamp'

export default {
  name: 'AuListItemModal',
  components: {
    VClamp
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showMore: false,
      x: null,
      y: null,
      startX: null,
      startY: null,
      imageMove: false,
      textMove: false,
      style: {
        transform: {
          translate3d: null
        }
      },
      threshold: 10
    }
  },
  computed: {
    backMove () {
      return (this.style.left) > this.threshold
    }
  },
  mounted () {
    this.$el.addEventListener('touchmove', this.touchMoveEventHandler)
    this.$el.addEventListener('touchend', this.touchEndEventHandler)
  },
  beforeMount () {
    document.body.classList.add('no-scroll')
  },
  beforeDestroy () {
    document.body.classList.remove('no-scroll')
  },
  methods: {
    touchMoveEventHandler (event) {
      if (event.isTrusted && event.touches.length) {
        this.x = event.touches[0].clientX
        this.y = event.touches[0].clientY
        if (!this.startX && !this.startY) {
          this.startX = event.touches[0].clientX
          this.startY = event.touches[0].clientY
        } else {
          this.touchMoveEventAction(event)
        }
      }
    },
    touchMoveEventAction (event) {
      this.style.transform.translate3d = `(${event.touches[0].clientX - this.startX}px,${event.touches[0].clientY - this.startY}px,0)`
      if (event.touches[0].clientX - this.x > 10) {
        this.backMove = true
      }
    },
    touchEndEventHandler () {
      if (this.x - this.startX > (window.innerWidth / 2)) {
        this.close()
      }
      this.clearTouch()
    },
    clearTouch () {
      this.x = null
      this.y = null
      this.startX = null
      this.startY = null
      this.style.transform.translate3d = null
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div :style="backMove ? style : null" class="au-list-item-modal">
    <div class="au-list-item-modal__close" @click="close">
      Luk {{ x }} {{ y }} {{ style }} {{ backMove }}
    </div>
    <div class="au-list-item-modal__content">
      <div class="au-list-item-modal__content-body">
        <v-clamp class="au-list-item-modal__header" autoresize :max-lines="2">
          {{ item.title }}
        </v-clamp>
        <div class="au-list-item-modal__body">
          <div class="au-list-item-modal__body-element" @click="showMore = !showMore">
            <v-clamp class="au-list-item-modal__body-description" autoresize :max-lines="showMore ? 20 : 3">
              {{ item.description }}
            </v-clamp>
          </div>
          <div v-if="item.category && !showMore" class="au-list-item-modal__body-element">
            Kategori: {{ item.category }}
          </div>
          <div v-show="!showMore" class="au-list-item-modal__body-element">
            Vurdering: <strong>{{ item.estimate | currency }}</strong>
          </div>
          <div v-show="!showMore" class="au-list-item-modal__body-element">
            Hammerslag: <strong>{{ item.price | currency }}</strong>
          </div>
          <div v-show="!showMore" class="au-list-item-modal__body-element au-list-item-modal__body-element--right">
            Solgt {{ item.sold_at | moment('from', 'now') }}
          </div>
        </div>
      </div>
    </div>
    <div class="au-list-item-modal__background">
      <div class="au-list-item-modal__background-overlay" />
      <img v-if="!item.images.length" src="http://buzzyporn.com/img/740479.gif" alt="test" class="au-list-item-modal__background-image">
      <img :src="item.images[0].url" alt="test" class="au-list-item-modal__background-image">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "AuListItemModal";
</style>
