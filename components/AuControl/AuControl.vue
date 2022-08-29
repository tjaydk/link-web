<script>
import pagesConstants from '../../constants/pagesConstants'
export default {
  name: 'AuControl',
  props: {
    page: {
      type: String,
      validator: val => [pagesConstants.CAMERA, pagesConstants.SEARCH].includes(val),
      required: true
    },
    hasItems: {
      type: Boolean,
      default: false
    },
    maxSteps: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      showMenu: false,
      controlIndicatorLineStyle: {
        left: '(calc(100%) / 3) * 0'
      },
      pagesConstants
    }
  },
  computed: {
    linePositionLeft () {
      return this.page === pagesConstants.CAMERA ? 0 : '69%'
    }
  },
  methods: {
    reset () {
      this.showMenu = false
      this.$emit('reset')
    }
  }
}
</script>

<template>
  <div class="au-control">
    <div :class="{'au-control__controls--ACTIVE' : showMenu}" class="au-control__controls">
      <div class="au-control__control-indicator">
        <div
          :style="{ left: linePositionLeft }"
          :class="{'au-control__control-indicator-line--HIDE' : showMenu}"
          class="au-control__control-indicator-line"
        />
      </div>
      <div class="au-control__controls-row">
        <div
          :class="{'au-control__control-button--DISABLED' : page === pagesConstants.CAMERA}"
          class="au-control__control-button"
          @click="$emit('setPage', pagesConstants.CAMERA)"
        >
          <font-awesome-icon icon="fa-camera-retro" />
        </div>
        <div class="au-control__control-button" @click="showMenu = !showMenu">
          <font-awesome-icon icon="fa-ellipsis" />
        </div>
        <div
          :class="{'au-control__control-button--DISABLED' : page === pagesConstants.SEARCH}"
          class="au-control__control-button"
          @click="$emit('setPage', pagesConstants.SEARCH)"
        >
          <font-awesome-icon icon="fa-magnifying-glass" />
        </div>
      </div>
      <div class="au-control__controls-row">
        <au-button class="au-control__control-button" :disabled="!hasItems" @click="reset">
          Nulstil
        </au-button>
        <au-button class="au-control__control-button" :disabled="!$auth.loggedIn" @click="$emit('logout')">
          Log ud
        </au-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'AuControl';
</style>
