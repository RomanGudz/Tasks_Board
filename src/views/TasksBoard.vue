<template>
  <template v-if="taskActive">
    <h3 class="text-white">Всего активных задач: {{ taskActive }}</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="card">
          <h2 class="card-title">
            Название задачи {{ task.title }}
            <app-status
              :type="task.type"
              :status="task.status"
              :key="task.id"
            />
          </h2>
          <p>
            <strong>
              <small>
                {{ new Date().toLocaleDateString() }} {{ task.data }}
              </small>
            </strong>
          </p>
          <router-link
            :to="'/task/' + task.id"
            @click="$store.commit('thisTask', task.id)"
          >
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
import { ref, reactive } from "vue";
import { useStore } from "vuex";

export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const tasks = reactive(store.getters.tasks);
    const taskActive = ref(store.getters.taskFilter);

    return {
      tasks,
      taskActive,
    };
  },
};
</script>
