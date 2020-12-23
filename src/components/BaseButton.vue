<template>
  <button class="base-button">
    <slot />
    <img
      src="@/assets/arrow.svg"
      alt=""
      class="base-button__arrow"
    >
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
.base-button__arrow {
  width: .5rem;
  @apply
    ml-4
}
</style>
