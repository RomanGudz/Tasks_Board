<template>
  <span :class="['badge', taskProp.type]">{{ taskProp.status }}</span>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["task"],
  setup(props) {
    const taskProp = ref(props.task);

    return {
      taskProp,
    };
  },
};
</script>
