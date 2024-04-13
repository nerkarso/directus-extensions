<template>
  <div class="sweetalert-button">
    <v-button class="action" @click="showAlert">{{ button_text }}</v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    button_text: {
      type: String,
      default: null,
    },
    configuration: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    function showAlert(): void {
      Swal.fire(props.configuration);
    }

    return { showAlert };
  },
});
</script>
