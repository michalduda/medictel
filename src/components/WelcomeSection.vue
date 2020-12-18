<template>
  <section class="welcome-section relative mt-24 py-24">
    <div class="flex">
      <div class="w-5c ml-1c">
        <h2 class="text-5xl text-darkblue mb-20">
          MODULAR<br />
          MEDICAL<br />
          SOFTWARE
        </h2>
        <div class="flex items-center justify-between">
          <base-button>
            get the idea
          </base-button>
          <p class="uppercase text-xl mx-4">
            We believe saving time is cruciaL.
          </p>
        </div>

      </div>
      <div class="w-5c">
        <div class="welcome__video-wrapper">
          <button class="welcome__play-button">
            <img
              src="@/assets/play.svg"
              alt="Play"
            >
          </button>
          <button class="welcome__fullscreen-button">
            <img
              src="@/assets/fullscreen.svg"
              alt="Fullscreen"
            >
          </button>
          <img
            src="@/assets/video-cover.png"
          >
        </div>

      </div>
      <div class="welcome__box-1"/>
      <div class="welcome__box-2"/>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.welcome__video-wrapper {
  @apply
    relative;
}
.welcome__play-button {
  @apply
    absolute
    left-0
    w-16;
  top: 50%;
  transform: translate(-37%, -50%);
}
.welcome__fullscreen-button{
  @apply
    absolute
    right-0
    top-0
    w-8;
  transform: translate(-100%, -50%);

}
.welcome__box-1 {
  @apply
    absolute
    bg-blue
    w-6c
    top-12
    bottom-12
    left-2c
    -z-1
}
.welcome__box-2 {
  @apply
    absolute
    bg-green
    h-full
    w-2.5c
    top-0
    right-0
    -z-1;
}
</style>
