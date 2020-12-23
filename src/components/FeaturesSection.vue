<template>
  <section class="features mt-10">
    <div class="features__box-1 bg-magenta">
      <base-button class="features__button my-8">
        get the offer
      </base-button>
    </div>

    <div class="features__text my-10">
      <h3 class="">
        <b>
          Bring simplicity
        </b> in the health care managment.
      </h3>
      <p class="mt-8">
        Simplicity and logically designed process is everything in day to day work organization With our system you can change the face of medical procedures.
      </p>
    </div>

    <FeaturesVisual class="features__visual"/>

  </section>
</template>

<script>
import FeaturesVisual from '@/components/FeaturesVisual'

export default {
  components: {
    FeaturesVisual
  }
}
</script>

<style lang="scss">
.features {
  display: grid;
  grid-template-columns: repeat(12, (100% / 12));
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
.features__text{
  grid-column: 3 / span 8;
  grid-row: 2 / span 1;
}
.features__visual{
  grid-column: 1 / -1;
  grid-row: 3 / span 1;
}
</style>
