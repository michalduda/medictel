<template>
  <section class="welcome relative mt-8 md:mt-24">
    <div class="welcome__box-1 bg-blue"></div>
    <div class="welcome__box-2 bg-green"></div>

    <h2 class="welcome__header text-3xl md:text-5xl text-darkblue mb-6 mt-2 md:mb-16 md:mt-0">
      MODULAR<br />
      MEDICAL<br />
      SOFTWARE
    </h2>

    <p class="welcome__text uppercase text-xl mb-6 md:mb-0 md:ml-48 mr-8">
      We believe saving time is cruciaL.
    </p>

    <WelcomeVideo class="welcome__video mt-8 ml-4 md:m-0" />

    <div class="welcome__button mt-8 md:mt-0">
      <base-button>
        get the idea
      </base-button>
    </div>

    <FeatureBox1 class="welcome__feature mt-4 md:hidden md:m-0" />

  </section>
</template>

<script>
import WelcomeVideo from '@/components/WelcomeVideo.vue'
import FeatureBox1 from '@/components/FeatureBox1.vue'

export default {
  components: {
    WelcomeVideo,
    FeatureBox1
  }
}
</script>

<style lang="scss">
.welcome {
  display: grid;
  grid-template-columns: repeat(12, (100% / 12));
  grid-template-rows: repeat(5, minmax(10px, auto)) 32px;
}
.welcome__box-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
.welcome__header {
  grid-column: 4 / -1;
  grid-row: 1 / span 1;
}
.welcome__text {
  grid-column: 2 / -1;
  grid-row: 2 / span 1;
}
.welcome__video {
  grid-column: 2 / -1;
  grid-row: 3 / span 1;
}

.welcome__box-2 {
  grid-column: 8 / -1;
  grid-row: 4 / span 4;
}
.welcome__button {
  grid-column: 7 / -1;
  grid-row: 4 / span 1;
}
.welcome__feature {
  grid-column: 3 / -2;
  grid-row: 5 / span 1;
}
@media (min-width: 768px) {
  .welcome {
    display: grid;
    grid-template-columns: repeat(12, (100% / 12));
    grid-template-rows: 48px 32px auto minmax(125px, auto) 32px 48px;
  }
  .welcome__box-1 {
    grid-column: 3 / span 6;
    grid-row: 2 / span 4;
  }
  .welcome__header {
    grid-column: 2 / span 3;
    grid-row: 3 / span 1;
  }
  .welcome__button {
    grid-column: 2 / span 5;
    grid-row: 4 / span 1;
  }
  .welcome__text {
    grid-column: 2 / span 5;
    grid-row: 4 / span 1;
    justify-self: end;
    margin-top: 10px;
  }
  .welcome__video {
    grid-column: 7 / span 5;
    grid-row: 3 / span 2;
  }

  .welcome__box-2 {
    grid-column: 11 / span 2;
    grid-row: 1 / -1;
  }
}
</style>
