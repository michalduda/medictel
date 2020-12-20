<template>
  <div id="app">
    <MainGrid />
    <MainHeader />
    <WelcomeSection />
    <FeaturesSection />
    <MissionSection />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainGrid from '@/components/MainGrid'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturesSection from '@/components/FeaturesSection'
import MissionSection from '@/components/MissionSection'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainGrid,
    WelcomeSection,
    FeaturesSection,
    MissionSection
  }
}
</script>

<style lang="postcss">
#app {
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
