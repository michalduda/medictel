<template>
  <div class="features-top flex">
    <div class="ml-2.5c w-2.5c">
      <div>
        <img
          src="@/assets/plus.svg"
          class="w-7"
          alt=""
        >
      </div>

      <h3 class="uppercase text-xl mt-3 ml-14">
        <b>
          Bring simplicity
        </b> in the health care managment.
      </h3>
      <p class="mt-8">
        Simplicity and logically designed process is everything in day to day work organization With our system you can change the face of medical procedures.
      </p>
    </div>
    <div class="ml-0.5c w-5.5c bg-yellow mt-20 flex items-center justify-center">
      <span class="features-top__square bg-magenta text-white">
        PLUG
      </span>
      <span class="features-top__square text-magenta text-4xl">
        &amp;
      </span>
      <span class="features-top__square bg-magenta text-white">
        CARE
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.features-top__square {
  @apply
    flex
    items-center
    justify-center
    m-2.5
    text-2xl
    border-magenta
    border-4;
  height: 80px;
  min-width: 155px;
}
</style>
