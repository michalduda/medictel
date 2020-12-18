<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.base-button {
  @apply
    px-8
    py-2
    border-darkblue
    border-4
    text-darkblue
    font-bold
    whitespace-nowrap
    hover:bg-darkblue
    hover:text-white;
}
</style>
