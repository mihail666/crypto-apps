<template>
  <div>
    <div v-if="!tasksComputed.length">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NavLogo />
        <h1 class="text-center text-2xl font-semibold text-current">
          not fond tasks <br />
          Create tasks
        </h1>
      </div>
      <button
        @click="$router.push('/createTask')"
        class="navbutton flex w-100 justify-center mx-auto rounded-md px-4 py-0 font-semibold leading-6 text-current"
      >
        <h1 class="text-sm text-white/90">new task</h1>
      </button>
    </div>

    <div v-else>
      <h1 class="text-center text-2xl font-semibold text-current/90">Task</h1>
      <template
        v-for="task in tasksComputed"
        :key="task"
      >
        <TaskItem
          :task="task"
          @removeTask="removeTask"
          @completedTask="completedTask"
          @removeCompletedTask="removeCompletedTask"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import NavLogo from '../../components/layout/full/logo/NavLogo.vue'
import TaskItem from '../../components/tasks/TaskItem.vue'
import { useUserStore } from '../../store/appState'

let arr = ref([])
const userStor = useUserStore()
const tasksComputed = computed(() => userStor.data.tasks)

const removeTask = (value) => {
  userStor.data.tasks.forEach((task, index) => {
    if (task.date == value.date) {
      userStor.data.tasks.splice(index, 1)
    }
  })
}

const completedTask = (value) => {
  userStor.data.tasks.map((task) => {
    if (task.date == value.date) {
      task.completed = true
    }
  })
}

const removeCompletedTask = (value) => {
  userStor.data.tasks.map((task) => {
    if (task.date == value.date) {
      task.completed = false
    }
  })
}
</script>
