<template>
  <div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <NavLogo />
        <h1 class="text-center text-2xl font-semibold text-current/90">
          Create task
        </h1>
      </div>

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <TaskFormCreate />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavLogo from '../../components/layout/full/logo/NavLogo.vue'
import TaskFormCreate from '../../components/tasks/TaskFormCreate.vue'
</script>
