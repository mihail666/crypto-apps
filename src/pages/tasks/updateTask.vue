<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NavLogo />
        <h1 class="text-center text-2xl font-semibold text-current/90">
          Update task
        </h1>
      </div>

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <TaskFormUpdate />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavLogo from '../../components/layout/full/logo/NavLogo.vue'
import TaskFormUpdate from '../../components/tasks/TaskFormUpdate.vue'
</script>
