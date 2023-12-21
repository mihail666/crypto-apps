<template>
  <button
    type="button"
    class="relative flex rounded-xl bg-gray-800 text-sm focus:ring-white focus:ring-offset-3 hover:invert"
    id="user-menu-button"
    aria-expanded="false"
    aria-haspopup="true"
  >
    <span class="absolute"></span>
    <span class="sr-only">Change Theme</span>
    <i class="text-4xl cursor-pointer text-current"
      :class="[false ? 'ri-moon-line' : 'ri-sun-line']"
    ></i>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped></style>
