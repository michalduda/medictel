<template>
  <div class="welcome__video-wrapper flex">
    <div class="relative flex">
      <button class="welcome__play-button absolute w-10 md:w-16">
        <img
          src="@/assets/play.svg"
          alt="Play"
        >
      </button>
      <button class="welcome__fullscreen-button absolute w-8 hidden md:block">
        <img
          src="@/assets/fullscreen.svg"
          alt="Fullscreen"
        >
      </button>
      <img
        src="@/assets/video-cover.png"
        class="welcome__video-cover"
      >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.welcome__play-button {
  left: 0;
  top: 50%;
  transform: translate(-37%, -50%);
}
.welcome__fullscreen-button {
  top: 0;
  right: 0;
  transform: translate(-100%, -50%);
}
.welcome__video-cover {
  object-fit: cover;
}
</style>
