<template>
  <div :style="custom_css"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    custom_css: {
      type: Object,
      default: null,
    },
  },
});
</script>
