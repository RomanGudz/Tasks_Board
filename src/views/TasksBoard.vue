<template>
  <template v-if="taskActive">
    <h3 class="text-white">Всего активных задач: {{ taskActive }}</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="card">
          <h2 class="card-title">
            {{ task.title }}
            <app-status :task="task" />
          </h2>
          <p><strong>Выполнить до:</strong> {{ task.data }}</p>
          <router-link :to="'/task/' + task.id" @click="findTask(task.id)">
            <button class="btn primary">Посмотреть</button>
          </router-link>
        </div>
      </li>
    </ul>
  </template>

  <h1 class="text-white center" v-else>Задач пока нет</h1>
</template>

<script>
// сделать фильтрацию по разным статусам
import AppStatus from "../components/AppStatus";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const tasks = ref(store.getters.tasks);
    const taskActive = computed(() => {
      if (tasks.value !== null) {
        return tasks.value.filter((item) => item.type === "primary").length;
      } else {
        return false;
      }
    });

    const findTask = (id) => {
      store.commit("thisTask", id);
    };
    return {
      tasks,
      taskActive,
      findTask,
    };
  },
};
</script>
