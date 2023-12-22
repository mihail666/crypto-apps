<template>
  <button
    type="button"
    class="relative flex rounded-xl bg-gray-800 text-sm"
    id="user-menu-button"
    aria-expanded="false"
    aria-haspopup="true"
  >
    <span class="absolute"></span>
    <span class="sr-only">Change Theme</span>
    <i
      class="text-2xl cursor-pointer text-current text-current/60 hover:text-current focus:text-current"
      :class="[false ? 'ri-moon-line' : 'ri-sun-line']"
    ></i>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped></style>
