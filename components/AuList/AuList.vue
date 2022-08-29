<script>
import { mapState } from 'vuex'

export default {
  name: 'AuList',
  props: {
    perPage: {
      type: Number,
      default: 50
    },
    currentPage: {
      type: Number,
      default: 1
    },
    lastPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    ...mapState({
      items: state => state.auctions.index.items,
      loading: state => state.auctions.index.loading,
      error: state => state.auctions.index.loading
    }),
    data () {
      return this.items.data || []
    }
  },
  mounted () {
    // this.initializeObserver()
  },
  methods: {
    initializeObserver () {
      const options = {
        root: document.querySelector('#au-list'),
        rootMargin: '100px',
        threshold: 1.0
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
          if (this.data.length && entry.isIntersecting) {
            this.$emit('load')
          }
        })
      }, options)

      const target = document.querySelector('#au-list__loader')
      observer.observe(target)
    }
  }
}
</script>

<template>
  <div class="au-list">
    <div id="au-list" class="au-list__items">
      <au-list-item v-for="item in data" :key="item.item" :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "AuList";
</style>
