<template>
  <figure>
    <img :src="src" :alt="alt" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
figure {
  margin: 1em 0;
  text-align: left;
}
img {
  max-width: 100%;
  height: auto;
}
figcaption {
  margin-top: 0.5em;
  font-style: italic;
  color: #666;
}
</style>