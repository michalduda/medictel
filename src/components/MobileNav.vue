<template>
  <nav class="nav-mobile">
    <ul class="nav-mobile__list flex flex-col m-0 p-0 list-none">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="header__link whitespace-nowrap text-darkblue m-6 uppercase text-3xl"
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
.nav-mobile {
  position: fixed;
  z-index: 8;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
