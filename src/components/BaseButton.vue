<template>
  <button class="base-button">
    <slot />
    <!-- <img
      src="@/assets/arrow.svg"
      alt=""
      class="base-button__arrow"
    > -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="base-button__arrow"
      viewBox="0 0 5 7"
    >
      <path
        class="base-button__path"
        d="M3.5,0,7,5H0Z"
        transform="translate(5) rotate(90)"
      />
    </svg>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.base-button {
  @apply
    flex
    items-center
    pl-8
    pr-4
    py-2
    border-darkblue
    border-4
    text-darkblue
    font-bold
    whitespace-nowrap
    hover:bg-darkblue
    hover:text-white;
}
.base-button__path{
  color: inherit;
}
.base-button__arrow {
  color: inherit;
  fill: currentColor;
  width: .5rem;
  @apply
    ml-4
}
.base-button.dark {
   @apply
    border-darkblue
    bg-darkblue
    text-white
    font-normal
    hover:bg-magenta
    hover:border-magenta
}
</style>
