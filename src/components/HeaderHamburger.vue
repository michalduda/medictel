<template>
  <div class="header-hamburger">
    <div
      class="hamburger hamburger--stand"
      :class="{'is-active': open}"
      @click="toggleActive"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean
    }
  },
  methods: {
    toggleActive() {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/hamburger.scss';

.header-hamburger{
  position: relative;
  z-index: 9;
}
</style>
