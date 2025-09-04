<script setup>
import {withBase} from 'vitepress' 
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

<template>
  <figure>
    <img :src="withBase(src)" :alt="alt" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>



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