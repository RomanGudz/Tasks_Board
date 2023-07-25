<template>
  <span :class="['badge', typeProps]">{{ statusprops }}</span>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["type", "status"],
  setup(props) {
    const typeProps = ref(props.type);
    const statusprops = ref(props.status);

    return {
      typeProps,
      statusprops,
    };
  },
};
</script>
