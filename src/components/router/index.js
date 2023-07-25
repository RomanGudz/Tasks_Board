import { createRouter, createWebHistory } from 'vue-router'
import NewTask from '@/views/NewTask.vue'
import TasksBoard from '@/views/TasksBoard.vue'
import AppTask from '@/views/AppTask.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/tasks', component: TasksBoard, alias: '/' },
    { path: '/new', component: NewTask },
    { path: '/task/:taskId', component: AppTask, props: true },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})