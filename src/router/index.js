import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/tasks',
    name: 'Tasks',
    meta: { layout: 'main' },
    component: () => import('../pages/tasks/index.vue'),
  },
  {
    path: '/createTask',
    name: 'CreateTask',
    meta: { layout: 'empty' },
    component: () => import('../pages/tasks/createTask.vue'),
  },
  {
    path: '/updateTask',
    name: 'UpdateTask',
    meta: { layout: 'empty' },
    component: () => import('../pages/tasks/updateTask.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    meta: { layout: 'main' },
    component: () => import('../pages/statistics/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
