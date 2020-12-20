<template>
  <div id="app">
    <MainGrid />
    <MainHeader />
    <WelcomeSection />
    <FeaturesSection />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainGrid from '@/components/MainGrid'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturesSection from '@/components/FeaturesSection'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainGrid,
    WelcomeSection,
    FeaturesSection
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
