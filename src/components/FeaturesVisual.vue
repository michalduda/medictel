<template>
  <div
    class="features__visual bg-yellow flex items-center justify-center py-12 md:py-24"
  >
    <span class="features__square bg-magenta text-white">
      PLUG
    </span>
    <span class="features__square text-magenta text-2xl md:text-4xl">
      &amp;
    </span>
    <span class="features__square bg-magenta text-white">
      CARE
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.features__square {
  @apply flex
    items-center
    justify-center
    m-2.5
    md:text-2xl
    border-magenta;
}
.features__square:first-of-type,
.features__square:last-of-type {
  @apply border-4;
  height: 60px;
  min-width: 100px;
}
@media (min-width: 768px) {
  .features__square,
  .features__square:first-of-type,
  .features__square:last-of-type {
    height: 80px;
    min-width: 155px;
    @apply border-4;
  }
  .features__square:last-of-type {
    transform: translateY(-50%);
  }
}
</style>
