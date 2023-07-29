<template>
  <form class="card" @submit.prevent="submitNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" v-model="data" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="description"></textarea>
    </div>

    <button class="btn primary" type="submit" :disabled="disapledBtn">
      Создать
    </button>
  </form>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const id = ref(Math.ceil(Math.random() * 90000000) + 10000000);
    const title = ref("");
    const data = ref("");
    const description = ref("");
    const status = ref("");
    const type = ref("");
    const router = useRouter();
    const disapledBtn = ref(true);

    const validTitle = () => {
      return (disapledBtn.value = title.value.length <= 0);
    };

    const validData = () => {
      if (new Date() < new Date(data.value)) {
        status.value = "активна";
        type.value = "primary";
      } else {
        status.value = "отменена";
        type.value = "danger";
      }
    };
    const validDescription = () => {
      return (disapledBtn.value = description.value.length <= 0);
    };

    watchEffect(() => {
      validTitle() || validDescription() || validData();
    });

    const submitNewTask = () => {
      store.commit("newTask", {
        id: id.value,
        title: title.value,
        description: description.value,
        data: new Date(data.value).toLocaleDateString(),
        status: status.value,
        type: type.value,
      }),
        router.push("/");
    };
    return {
      description,
      data,
      title,
      submitNewTask,
      disapledBtn,
    };
  },
};
</script>
