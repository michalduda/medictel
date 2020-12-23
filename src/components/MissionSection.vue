<template>
  <section class="mission">
    <h3 class="mission__secondary-header font-bold mb-8">
      OUR MISSION.
    </h3>

    <div class="mission__secondary-text">
      <p>
        Simplicity, function and security: those three words put together how we
        approach the modern medical processes to make the medicine accessible
        and effective.
      </p>
      <base-button class="mission__secondary-text-button mt-8 md:mt-20">
        contact us
      </base-button>
    </div>

    <div class="mission__visual flex">
      <img
        src="@/assets/male_doc.png"
        alt=""
        class="mission__visual-img w-full md:mt-11"
      />
    </div>

    <div class="mission__primary-visuals flex justify-center md:justify-start items-start">
      <img
        src="@/assets/chart.svg"
        alt=""
        class="mission__chart-1 md:mr-14"
      />
      <img
        src="@/assets/chart_2.svg"
        alt=""
        class="mission__chart-2 hidden md:block"
      />
    </div>

    <div class="mission__primary-text">
      <h3 class="font-bold mt-10 md:mt-0 mb-8">
        TECHNOLOGY.
      </h3>
      <p>
        We trust that our technology is the answer to many challenges
        encountered in healthcare system, by making the complex processes
        logical and simple.
      </p>
    </div>

    <div class="mission__primary-action">
      <button class="bg-darkblue text-white py-6 px-14 mt-14">
        PRESS RELEASES
      </button>
    </div>

    <div class="mission__box-background bg-blue"></div>

    <div class="mission__box-supplementary bg-darkblue hidden md:block"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
$w-1: (1/12 * 100%);
$w-1-5: (1.5/12 * 100%);
$w-2: (2/12 * 100%);
$w-3: (3/12 * 100%);
$w-6-5: (6.5/12 * 100%);

.mission {
  display: grid;
  grid-template-columns: $w-2 $w-6-5 $w-1-5 $w-2;
  grid-template-rows: auto auto 35px auto 70px auto auto;
}
.mission__secondary-header {
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
}
.mission__secondary-text {
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
}
.mission__secondary-text-button {
  transform: translateY(50%);
}
.mission__visual {
  grid-column: 1 / span 2;
  grid-row: 3 / span 3;
}
.mission__box-background {
  grid-column: 3 / span 2;
  grid-row: 4 / span 1;
}
.mission__primary-visuals {
  display: flex;
  grid-column: 3 / span 2;
  grid-row: 4 / span 1;
  z-index: 2;
  justify-self: center;
  align-self: end;
}
.mission__chart-1 {
  width: 66%;
  transform: translateY(44%)
}
.mission__visual-img {
  object-fit: cover;
  object-position: 100% 0;
}
.mission__primary-text {
  grid-column: 2 / span 2;
  grid-row: 6 / span 1;
}

.mission__primary-action {
  grid-column: 2 / span 2;
  grid-row: 7 / span 1;
}
@media (min-width: 768px) {
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
  .mission__secondary-text-button {
  transform: none;
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
      transform: translateY(50%);
    }
  }
  .mission__primary-visuals {
    grid-column: 6 / span 1;
    grid-row: 3 / span 1;
    z-index: 2;
    transform: translateY(-55%);
  }
  .mission__chart-1 {
    width: 136px;
    transform: none;
  }
  .mission__chart-2 {
    width: 100px;
    margin-top: 20px;
  }
}
</style>
