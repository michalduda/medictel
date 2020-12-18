<template>
  <div class="grid__main">
    <div
      v-for="i in 12"
      :key="i"
      class="grid__column"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.grid__main {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
}
.grid__column {
  width: 1 / 12 * 100%;
  &:not(:last-of-type) {
    border-right: 1px solid rgba(255,0,0,.2);
  }
}
</style>
