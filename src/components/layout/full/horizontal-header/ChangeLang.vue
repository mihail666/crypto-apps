<template>
  <button
    type="button"
    @click="showMenu = !showMenu"
    
    class="relative flex rounded-lg bg-gray-800 text-sm text-current/60 hover:text-current focus:text-current"
    id="user-menu-button"
    aria-expanded="false"
    aria-haspopup="true"
  >
    <span class="absolute -inset-.5"></span>
    <span class="sr-only">Open lang menu</span>
    <i class="ri-earth-fill text-2xl text-current/60 hover:text-current focus:text-current "></i>
  </button>
  <div
    @mouseleave="showMenu = false"
    v-show="showMenu"
    class="absolute left-7 top-10 z-20 mt-2 w-18 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabindex="1"
  >
    <!-- Active: "bg-gray-100", Not Active: "" -->
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      id="user-menu-item-0"
      @click="!showMenu"
      ><i class="ri-earth-fill text-2xl text-current"></i></a
    >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      id="user-menu-item-1"
      @click="!showMenu"
      ><i class="ri-earth-fill text-2xl text-current"></i></a
    >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      id="user-menu-item-2"
      @click="!showMenu"
      ><i class="ri-earth-fill text-2xl text-current"></i></a
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showMenu = ref(false)
</script>

<style lang="scss" scoped></style>
