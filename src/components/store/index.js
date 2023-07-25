import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      tasksBoard: [
        { id: 1, title: 'title1', body: 'body1', data: '1', status: 'активна', type: 'primary' },
        { id: 2, title: 'title2', body: 'body2', data: '2', status: 'выполняется', type: 'primary' },
        { id: 3, title: 'title3', body: 'body3', data: '3', status: 'выполнена', type: 'warning' },
        { id: 4, title: 'title4', body: 'body4', data: '4', status: 'отменена', type: 'danger' },
      ],
      task: {},
    }
  },
  getters: {
    tasks(state) {
      return state.tasksBoard
    },
    taskFilter(state) {
      return state.tasksBoard.filter(item => item.type === 'primary').length
    },
    notTask(state, payload) {
      return state.tasksBoard.filter(item => item.id == payload)
    }


  },
  mutations: {
    newTask(state, payload) {
      state.tasksBoard.push(payload)
    },
    thisTask(state, payload) {
      state.task = state.tasksBoard.find(i => i.id === payload)
    },
    taskWork(state) {
      state.task.status = "выполянется",
        state.task.type = "primary"
    }

  },
})
