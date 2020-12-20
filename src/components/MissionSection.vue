<template>
  <section class="mission flex items-stretch">
    <div class="w-4.5c ml-1c relative">
      <MissionSecondaryText />
      <div class="mission__image"></div>
    </div>
    <div class="w-7.5c mt-16 relative flex justify-between">
      <div class="mission__primary-text">
        <h3 class="font-bold mb-16">
          TECHNOLOGY.
        </h3>
        <p>
          We trust that our technology is the answer to many challenges encountered in healthcare system, by making the complex processes logical and simple.
        </p>
      </div>
      <div class="mission__side-box bg-darkblue"></div>
    </div>
  </section>
</template>

<script>
import MissionSecondaryText from '@/components/MissionSecondaryText'

export default {
  components: {
    MissionSecondaryText
  }
}
</script>

<style lang="scss">
.mission__image {
  position: absolute;
  width: 77.7%;
  top: 6.6rem;
  right: 0;
  padding-bottom: 97.5%;
  z-index: -1;
  background: url('~@/assets/male_doc.png');
}
.mission__side-box {
  width: 23%;
  height: 375px;
}
.mission__primary-text {
  width: 2.5 / 6.5 * 100%;
  margin-left: 1 / 6.5 * 100%;
}
</style>
