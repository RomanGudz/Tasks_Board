<template>
  <form class="card" @submit.prevent="submitNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <small v-if='errors.title'>{{ errors.title }}</small>
      <input type="text" id="title" ref="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <small v-if='errors.data'>{{ errors.data }}</small>
      <input type="date" id="date" ref="data">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <small v-if='errors.description'>{{ errors.description }}</small>
      <textarea id="description" ref="description"></textarea>
    </div>

    <button class="btn primary" type="submit">Создать</button>
  </form>
</template>


<script>
// сделать валидацию по кнопке, то есть кнопка неактивна если одно из полей не заполнено черелизация через comptuted
// присвоение рандомного id или id из базы данных
// при выборе даты задним числом, автоматически присваивать статус "отмененая"
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const title = ref(null)
    const data = ref(null)
    const description = ref(null)
    const router = useRouter()
    const errors = reactive({ title: null, data: null, description: null })


    const submitNewTask = () => {
      let today = new Date().toLocaleDateString()
      if (title.value.value.length === 0) {
        return errors.title = 'введите название задачи',
          console.log(today)
      }
      // доделать обработку даты!!!!
      // else if (data.value.value === today) {
      //   return errors.data = 'нету даты'
      // } 
      else if (description.value.value.length === 0) {
        return errors.description = 'нету описания задачи'
      }
      else {
        return store.commit('newTask', {
          title: title.value.value,
          description: description.value.value,
          data: data.value.value,
          status: 'active',
          type: 'none'
        }),
          router.push('/')
      }
    }

    return {
      description,
      data,
      title,
      submitNewTask,
      errors,

    }
  }
}
</script>