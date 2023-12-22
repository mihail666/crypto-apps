<template>
  <div>
    <h1 class="text-3xl font-bold text-current">Task</h1>

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
    {{ arr }}
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
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
