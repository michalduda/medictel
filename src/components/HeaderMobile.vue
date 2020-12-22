<template>
  <header class="header-mobile">
    <div class="flex justify-between items-end">
      <img
        class="header-mobile__logo ml-1c w-28 sm:w-36"
        src="@/assets/medictel-logo.svg"
        alt=""
      >
      <div class="header-mobile__box-2 bg-magenta ml-auto">
        <HeaderHamburger
          class="mr-4"
          :open="open"
          @toggle="open = !open"
        />
      </div>
      <MobileNav v-if="open" />
    </div>
  </header>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'
import MobileNav from '@/components/MobileNav'
import HeaderHamburger from '@/components/HeaderHamburger'

export default {
  data() {
    return {
      open: false
    }
  },
  components: {
    DesktopNav,
    MobileNav,
    HeaderHamburger
  }
}
</script>

<style lang="scss">

</style>
