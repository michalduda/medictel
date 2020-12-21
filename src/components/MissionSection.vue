<template>
  <section class="mission">

    <h3 class="mission__secondary-header font-bold mb-8">
      OUR MISSION.
    </h3>

    <div class="mission__secondary-text">
      <p>
        Simplicity, function and security: those three words put together how we approach the modern medical processes to make the medicine accessible and effective.
      </p>
      <base-button class="mt-20">
        contact us
      </base-button>
    </div>

    <div class="mission__visual">
      <img
        src="@/assets/male_doc.png"
        alt=""
        class="w-full mt-11"
      >
    </div>

    <div class="mission__primary-visuals flex items-start">
      <img
        src="@/assets/chart.svg"
        alt=""
        class="mission__chart-1 mr-14"
      >
      <img
        src="@/assets/chart_2.svg"
        alt=""
        class="mission__chart-2"
      >
    </div>

    <div class="mission__primary-text">
      <h3 class="font-bold mb-8">
        TECHNOLOGY.
      </h3>
      <p>
        We trust that our technology is the answer to many challenges encountered in healthcare system, by making the complex processes logical and simple.
      </p>
    </div>

    <div class="mission__primary-action">
      <button class="bg-darkblue text-white py-6 px-14 mt-14">
        PRESS RELEASES
      </button>
    </div>

    <div class="mission__box-background bg-blue"></div>

    <div class="mission__box-supplementary bg-darkblue"></div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$w-1: (1/12 * 100%);
$w-1-5: (1.5/12 * 100%);
$w-2: (2/12 * 100%);
$w-3: (3/12 * 100%);

.mission {
  display: grid;
  grid-template-columns: $w-1 $w-1 $w-2 $w-1-5 $w-1 $w-3 $w-1 $w-1-5;
  grid-template-rows: auto 110px repeat(4, minmax(75px, auto));
}
.mission__secondary-header {
  grid-column: 2 / 4;
}
.mission__secondary-text {
  grid-column: 2 / 4;
  grid-row: 2 / auto;
  z-index: 2;
}
.mission__visual {
  grid-column: 3 / 5;
  grid-row: 2 / 7;
}
.mission__box-background {
  grid-column: 5 / 9;
  grid-row: 3 / 6;
}
.mission__box-supplementary {
  grid-column: 8 / 9;
  grid-row: 2 / 5;
}
.mission__primary-text {
  grid-column: 6 / span 1;
  grid-row: 4 / 5;
  z-index: 2;
}

.mission__primary-action {
  grid-column: 6 / span 1;
  grid-row: 5 / span 1;
  z-index: 2;
  button {
    transform: translateY(50%)
  }

}
.mission__primary-visuals{
  grid-column: 6 / span 1;
  grid-row: 3 / span 1;
  z-index: 2;
  transform: translateY(-55%)
}
.mission__chart-1{
  width: 136px;
}
.mission__chart-2{
  width: 100px;
  margin-top: 20px;
}
</style>
