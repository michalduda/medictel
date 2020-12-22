<template>
  <footer class="footer mb-24">
    <div class="footer__top flex relative">
      <div class="footer__figure-wrapper">
        <div class="bg-darkblue footer__box-1"></div>
        <div class="bg-magenta footer__box-2"></div>
      </div>
      <div class="footer__social-links flex ml-2c">
        <a
          v-for="(social, index) in socials"
          :key="index"
          :href="social.link"
          class="my-6 mx-2 "
        >
          <img
            :src="social.image"
            alt=""
            class="w-6"
          >
        </a>
      </div>
    </div>
    <div class="flex footer__bottom ml-4c w-8c justify-between items-end">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        class="footer__link"
      >
        {{ link.label }}
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          image: require('@/assets/facebook.svg'),
          link: ''
        },
        {
          image: require('@/assets/instagram.svg'),
          link: ''
        },
        {
          image: require('@/assets/twitter.svg'),
          link: ''
        },
        {
          image: require('@/assets/linkedin.svg'),
          link: ''
        }
      ],
      links: [
        {
          label: 'our benefits',
          href: ''
        },
        {
          label: 'our mission',
          href: ''
        },
        {
          label: 'our technology',
          href: ''
        },
        {
          label: 'press releases',
          href: ''
        },
        {
          label: 'contact us',
          href: ''
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.footer__top{
  min-height: 100px;
}
.footer__bottom{
  min-height: 66px;
  @apply text-lg;
}
.footer__figure-wrapper {
  position: absolute;
  transform: translateX(-50%);
  @apply left-1c;
}
.footer__box-1{
  width: 65px;
  height: 100px;
}
.footer__box-2{
  width: 134px;
  height: 66px;
}
.footer__link {
  color: #9F9E9F;
  @apply p-5;

}
</style>
