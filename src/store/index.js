import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  state: () => {
    return {
      tasks: []
    }
  },
})

export default useStore