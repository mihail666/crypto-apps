import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isSideOverlay: false,
    isLoading: false,
    data: {
      tasks: []
    },
  }),
  actions: {
    updateData(partialData) {
      this.data = {
        ...this.data,
        ...partialData,
      }
    },
  },
  persist: true,
})
