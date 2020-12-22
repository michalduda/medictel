<template>
  <nav>
    <ul class="flex m-0 p-0 list-none">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="header__link whitespace-nowrap text-darkblue mx-6"
      >
        <a :href="link.href">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import links from '@/shared/headerLinks'

export default {
  data () {
    return {
      links
    }
  }
}
</script>

<style>

</style>
