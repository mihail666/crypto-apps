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
    meta: { layout: 'main' },
    component: () => import('../pages/tasks/createTask.vue'),
  },
  {
    path: '/updateTask/:date',
    name: 'UpdateTask',
    meta: { layout: 'main' },
    component: () => import('../pages/tasks/updateTask.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    meta: { layout: 'main' },
    component: () => import('../pages/statistics/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'main' },
    component: () => import('../pages/auth/login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { layout: 'main' },
    component: () => import('../pages/auth/registration.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
