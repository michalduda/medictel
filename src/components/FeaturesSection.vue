<template>
  <section class="features my-10">
    <FeatureBox1 class="features__feature-box hidden md:block" />

    <div class="features__box-1 bg-magenta">
      <base-button class="features__button my-8">
        get the offer
      </base-button>
    </div>

    <FeaturesVisual class="features__visual" />

    <div class="features__text my-10">
      <h3 class="font-bold mb-8">
        WE SAVE YOUR TIME FOR ACTIONS.
      </h3>
      <p>
        We believe in modular organized processes, where every piece of the
        puzzle has its dedicated role. That’s why Medictel fits perfectly to
        your actual needs and has the ability to scale with your business, also
        you can easily track and export your data
      </p>
    </div>
  </section>
</template>

<script>
import FeaturesVisual from '@/components/FeaturesVisual'
import FeatureBox1 from '@/components/FeatureBox1.vue'

export default {
  components: {
    FeaturesVisual,
    FeatureBox1
  }
}
</script>

<style lang="scss">
.features {
  display: grid;
  grid-template-columns: repeat(12, (100% / 12));
  grid-template-rows: repeat(3, auto);
}
.features__box-1 {
  grid-column: 1 / span 6;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: flex-end;
}
.features__button {
  transform: translateX(50%);
}
.features__visual {
  grid-column: 1 / -1;
  grid-row: 3 / span 1;
}
  .features__text {
  grid-column: 3 / span 8;
  grid-row: 2 / span 1;
  }
@media (min-width: 768px) {
  .features {
    display: grid;
    grid-template-columns: repeat(12, (100% / 12));
    grid-template-rows: 80px repeat(3, auto);
  }
  .features__feature-box {
    grid-column: 3 / span 3;
    grid-row: 1 / span 2;
  }
  .features__visual {
    grid-column: 7 / span 5;
    grid-row: 2 / span 1;
  }
  .features__box-1 {
    grid-column: 2 / span 2;
    grid-row: 3 / span 1;
    display: flex;
    justify-content: flex-end;
  }
  .features__text {
    grid-column: 7 / span 4;
    grid-row: 4 / span 1;
  }
}
</style>
