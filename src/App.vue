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

<style lang="scss" src="@/styles/global.scss" />
