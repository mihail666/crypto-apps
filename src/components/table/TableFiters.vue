<template>
  <div class="flex ml-3 self-center">
    <button
      type="button"
      class="navbutton relative flex rounded-xl bg-gray-800 text-sm ml-3 px-3 py-1"
      id="filter-button"
      aria-expanded="false"
      aria-haspopup="true"
      @click="(value = 0), $emit('filterEvent', value)"
    >
      <span class="absolute"></span>
      <span class="sr-only">All</span>
      <h3 class="text-offwhite text-xl">All</h3>
    </button>
    <button
      type="button"
      class="navbutton relative flex rounded-xl bg-gray-800 text-sm ml-3 px-3 py-1"
      id="filter-button"
      aria-expanded="false"
      aria-haspopup="true"
      @click="(value = 5), $emit('filterEvent', value)"
    >
      <span class="absolute"></span>
      <span class="sr-only">Change Theme</span>
      <h3 class="text-offwhite text-xl">TVL > 5%</h3>
    </button>
    <button
      type="button"
      class="navbutton relative flex rounded-xl bg-gray-800 text-sm ml-3 px-3 py-1"
      id="filter-button"
      aria-expanded="false"
      aria-haspopup="true"
      value="10"
      @click="(value = 10), $emit('filterEvent', value)"
    >
      <span class="absolute"></span>
      <span class="sr-only">Change Theme</span>
      <h3 class="text-offwhite text-xl">TVL > 10%</h3>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(100)
</script>

<style lang="scss" scoped></style>
