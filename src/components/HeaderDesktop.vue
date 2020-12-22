<template>
  <header class="header-desktop">
    <div class="flex items-end">
      <div class="header-desktop__box-1 bg-darkblue mr-16"></div>
      <div class="header-desktop__box-2 bg-magenta mr-1c ml-auto"></div>
      <DesktopNav />
    </div>
    <div class="d-flex">
      <img
        class="header-desktop__logo ml-1c mt-8 w-1.5c min-w-24"
        src="@/assets/medictel-logo.svg"
        alt=""
      >
    </div>
  </header>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'

export default {
  components: {
    DesktopNav
  }
}
</script>

<style lang="scss">
.header-desktop__box-1{
  width: 70px;
  height: 90px;
}
.header-desktop__box-2{
  width: 25%;
  height: 140px;
}
.header-desktop__link{
  font-size: 1.25rem;
}
.header-desktop__logo {
  width: 1.5/12 * 100%;
  min-width: 100px;
}
</style>
