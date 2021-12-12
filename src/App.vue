<template>
  <div id="app">
    <HeaderMobile v-if="screenMode === 'mobile'"/>
    <HeaderDesktop v-else />
    <WelcomeSection />
    <FeaturesSection />
    <MissionSection />
    <ContactSection />
    <MainFooter />
  </div>
</template>

<script>
import HeaderDesktop from '@/components/HeaderDesktop'
import HeaderMobile from '@/components/HeaderMobile'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturesSection from '@/components/FeaturesSection'
import MissionSection from '@/components/MissionSection'
import ContactSection from '@/components/ContactSection'
import MainFooter from '@/components/MainFooter'

import screenStore from '@/store/screen'

export default {
  name: 'App',
  components: {
    HeaderDesktop,
    HeaderMobile,
    WelcomeSection,
    FeaturesSection,
    MissionSection,
    ContactSection,
    MainFooter
  },
  computed: {
    screenMode() {
      return screenStore.mode
    }
  }
}
</script>

<style lang="postcss">
#app {
  min-width: 320px;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

*, *:before, *:after {
  color: #0C2352;
}

h3 {
  @apply
  uppercase
  text-xl;
}
</style>
