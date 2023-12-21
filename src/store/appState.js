import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isSideOverlay: false,
    isLoading: false,
    tasks: [],
    checkoutTasks: [],
  }),
  persist: true
})