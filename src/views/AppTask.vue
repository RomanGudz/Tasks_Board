<template>
  <div class="card" v-if="id">
    <h2>Название задачи {{ task.title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :status="task.status" :type="task.type" />
    </p>
    <p>
      <strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}
      {{ task.data }}
    </p>
    <p><strong>Описание</strong>: Описание задачи {{ task.body }}</p>
    <div>
      <button class="btn" @click="workTask">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }} НЕТ</strong>
  </h3>
</template>

<script>
// btn "взять в работу" динамически меняет статус на "выполняется" без перехода на главную
// кнопка "завершить" меняет статус на "выполнонено" без перехода
// кнопка "отменить" меняет статус на "отмененая" без перехода на главную
// при переходе на страницу с неправильным ID показвать сообщение  h3 teg сделать через coptuted дин
import AppStatus from "../components/AppStatus";
import { useStore } from "vuex";
import { reactive, ref, watchEffect } from "vue";

export default {
  components: { AppStatus },
  props: ["taskId"],
  setup(props) {
    const store = useStore();
    const task = reactive(store.state.task);
    const id = ref(props.taskId);
    watchEffect(() => {});
    const workTask = () => {
      // console.log(task),
      store.commit("taskWork");
      // console.log(task.status);
      // console.log(id.value);
    };
    return {
      task,
      workTask,
      id,
    };
  },
};
</script>

<style scoped></style>
