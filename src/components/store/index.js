import { createStore } from "vuex";

const tasks = JSON.parse(localStorage.getItem('tasks'))

export const store = createStore({
  state() {
    return {
      task: {},
    }
  },
  getters: {
    tasks(state) {
      return state.tasksBoard = tasks
    },
    notTask: (state) => (payload) => {
      return state.tasksBoard.find(item => item.id == payload)
    }
  },
  mutations: {
    newTask(state, payload) {
      if (state.tasksBoard == null) {
        state.tasksBoard = []
        state.tasksBoard = state.tasksBoard.concat(payload)
      } else {
        state.tasksBoard.push(payload)
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasksBoard))
    },
    thisTask(state, payload) {
      state.task = state.tasksBoard.find(i => i.id === payload)

    },
    taskWork(state) {
      state.task.status = "выполянется",
        state.task.type = "primary"
      state.tasksBoard.forEach((obj, index) => {
        if (obj.id === state.task.id) {
          tasks[index] = state.task
        }
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasksBoard))
    },
    completeTask(state) {
      state.task.status = "выполнена",
        state.task.type = "warning"

      state.tasksBoard.forEach((obj, index) => {
        if (obj.id === state.task.id) {
          tasks[index] = state.task
        }
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasksBoard))
    },
    stopTask(state) {
      state.task.status = "отменена",
        state.task.type = "danger"

      state.tasksBoard.forEach((obj, index) => {
        if (obj.id === state.task.id) {
          tasks[index] = state.task
        }
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasksBoard))
    },

  },
})
