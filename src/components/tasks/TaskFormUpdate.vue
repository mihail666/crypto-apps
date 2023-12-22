<template>
  <form
    @submit.prevent="updateTask"
    class="space-y-6 sm:w-[100%] md:w-[350px]"
    action="#"
    method="POST"
  >
    <div>
      <label
        for="title"
        class="block text-md font-medium leading-6 text-current"
        >Title task</label
      >
      <div class="mt-2">
        <input
          id="title"
          name="title"
          type="title"
          autocomplete="title"
          v-model="title"
          required
          class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <label
        for="busyness"
        class="block text-md font-medium leading-6 text-current"
        >Your busyness</label
      >
      <div class="mt-2">
        <input
          id="busyness"
          name="busyness"
          type="busyness"
          v-model="busyness"
          required
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <label
        for="formatWork"
        class="block text-md font-medium leading-6 text-current"
        >Your Work Format</label
      >
      <div class="mt-2">
        <input
          id="formatWork"
          name="formatWork"
          type="formatWork"
          v-model="formatWork"
          required
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <label
        for="Salary"
        class="block text-md font-medium leading-6 text-current"
        >salary</label
      >
      <div class="mt-2">
        <input
          id="salary"
          name="salary"
          type="salary"
          v-model="salary"
          required
          class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <label
        for="Message"
        class="block text-md font-medium leading-6 text-current"
        >Message</label
      >
      <div class="mt-2.5">
        <textarea
          name="message"
          id="message"
          rows="4"
          v-model="message"
          required
          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="navbutton flex w-100 justify-center mx-auto rounded-md px-4 py-0 font-semibold leading-6 text-current shadow-sm"
      >
        <h1 class="text-sm text-white/90">update task</h1>
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../../store/appState'
export default {
  setup() {
    const userStor = useUserStore()
    const route = useRoute()

    let title = ref('')
    let busyness = ref('')
    let formatWork = ref('')
    let salary = ref('')
    let message = ref('')

    const idTask = computed(() => route.params.date)

    watchEffect(() => {
      if (userStor.data.tasks.length) {
        userStor.data.tasks.filter((t) => {
          if (t.date == idTask.value) {
            title.value = t.title
            busyness.value = t.busyness
            formatWork.value = t.formatWork
            salary.value = t.salary
            message.value = t.message
          }
        })
      }
    })

    return { userStor, idTask, message, salary, formatWork, busyness, title }
  },

  methods: {
    updateTask() {
      this.userStor.data.tasks.map((task) => {
        if (task.date == this.idTask) {
          task.title = this.title
          task.busyness = this.busyness
          task.formatWork = this.formatWork
          task.salary = this.salary
          task.message = this.message
        }
      })
      this.$router.push('/tasks')
    },
  },
}
</script>
