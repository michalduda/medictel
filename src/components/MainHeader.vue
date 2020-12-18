<template>
  <header class="header">
    <div class="flex items-end">
      <div class="header__box-1 bg-darkblue"></div>
      <div class="header__box-2 bg-magenta mr-1c ml-auto"></div>
      <nav>
        <ul class="flex m-0 p-0 list-none">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="header__link whitespace-nowrap text-darkblue mx-6"
          >
            {{ link.label }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="d-flex">
      <img
        class="header__logo ml-1c mt-8 w-1.5c min-w-24"
        src="@/assets/medictel-logo.svg"
        alt=""
      >
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          label: 'benefits'
        },
        {
          label: 'our mission'
        },
        {
          label: 'technology'
        },
        {
          label: 'contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header__box-1{
  width: 70px;
  height: 90px;
}
.header__box-2{
  width: 25%;
  height: 140px;
}
.header__link{
  font-size: 1.25rem;
}
.header__logo {
  width: 1.5/12 * 100%;
  min-width: 100px;
}
</style>
