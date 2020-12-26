<template>
  <section class="contact mt-28">
    <div class="contact__text md:pl-8">
      <div class="contact__company">
        <img
          src="@/assets/medictel-logo.svg"
          alt="medictel"
          class="w-28"
        >
        <p class="contact__claim text-gray mt-2">
          part of taurusmed
        </p>
      </div>
      <p class="contact__mail my-6">
        <a
          href="mailto:hello@medictel.pl"
          class="text-magenta"
        >
          hello@medictel.pl
        </a>
      </p>
    </div>
    <div class="contact__form">
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
      <base-button class="contact__form-button mt-8">
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
$w-1: (1/12 * 100%);
$w-1-5: (1.5/12 * 100%);
$w-2: (2/12 * 100%);
$w-3: (3/12 * 100%);
$w-5-5: (5.5/12 * 100%);
$w-6-5: (6.5/12 * 100%);
$w-8: (8/12 * 100%);

.contact {
  display: grid;
  grid-template-columns: $w-2 $w-8 $w-2;
  grid-template-rows: auto auto;
}
.contact__text {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}

.contact__form {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  input, textarea {
    background: #F0F0F0;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding: 12px 24px;
  }
}
.contact__form-button {
  align-self: flex-end;
}
@media (min-width: 768px) {
  .contact {
    grid-template-columns: $w-2 $w-3 $w-5-5 $w-1-5;
    grid-template-rows: auto;
  }
  .contact__text {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  .contact__form {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
}
</style>
