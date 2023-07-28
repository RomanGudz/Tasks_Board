<template>
  <div class="card" v-if="findTask">
    <h2>{{ task.title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :task="task" />
    </p>
    <p>
      <strong>Дэдлайн</strong>:
      {{ task.data }}
    </p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="workTask">Взять в работу</button>
      <button class="btn primary" @click="completeTask">Завершить</button>
      <button class="btn danger" @click="stopTask">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }} НЕТ</strong>
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { useStore } from "vuex";
import { reactive, ref } from "vue";

export default {
  components: { AppStatus },
  props: ["taskId"],
  setup(props) {
    const store = useStore();
    const task = reactive(store.state.task);
    const id = ref(props.taskId);

    const findTask = ref(store.getters.notTask(id.value));

    const workTask = () => {
      store.commit("taskWork");
    };

    const completeTask = () => {
      store.commit("completeTask");
    };

    const stopTask = () => {
      store.commit("stopTask");
    };

    return {
      task,
      id,
      workTask,
      completeTask,
      stopTask,
      findTask,
    };
  },
};
</script>

<style scoped></style>
