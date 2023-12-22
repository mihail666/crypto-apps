<template>
  <div class="">
    <div class="flex min-h-full w-[100%] flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1
          class=" text-center text-2xl font-semibold leading-9 tracking-tight text-white/90"
        >
          Tasks
        </h1>
      </div>

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <TaskForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskForm from '../../components/tasks/TaskForm.vue'


</script>

<style lang="scss" scoped></style>
