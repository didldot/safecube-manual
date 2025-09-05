
<template>
  <figure>
    <img :src="imagePath" :alt="alt" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>


<script setup>
import {withBase} from 'vitepress';
import {computed} from "vue";

const path = "/admin/assets/";

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

const imagePath = computed(() => withBase(path + props.src));
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