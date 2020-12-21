<template>
  <section class="contact mt-28 flex">
    <div class="contact__text ml-2.5c w-2c">
      <img
        src="@/assets/medictel-logo.svg"
        alt="medictel"
        class="w-28"
      >
      <p class="contact__claim text-gray mt-2 mb-6">
        part of taurusmed
      </p>
      <p>
        <a
          href="mailto:hello@medictel.pl"
          class="text-magenta"
        >
          hello@medictel.pl
        </a>
      </p>
    </div>
    <div class="contact__form ml-0.5c w-5.5c flex justify-end flex-wrap">
      <input
        type="text"
        name="email"
        placeholder="email"
      >
      <textarea
        name="message"
        rows="5"
        placeholder="message"
      ></textarea>
      <base-button>
        send
      </base-button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.contact {
  input, textarea {
    background: #F0F0F0;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding: 12px 24px;
  }
}
</style>
