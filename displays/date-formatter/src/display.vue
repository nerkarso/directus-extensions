<template>
  <div class="formatted-date">{{ formatDate() }}</div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    dateFormat: {
      type: String,
      default: 'DD/MM/YYYY',
    },
  },
  setup(props) {
    function formatDate() {
      if (!props.value) return '';
      return dayjs(props.value).format(props.dateFormat);
    }

    return { formatDate };
  },
};
</script>
