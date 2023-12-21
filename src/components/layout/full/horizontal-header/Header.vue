<template>
  <div
    class="header bg-black p-2 flex items-center justify-between"
    :class="{ full: userStor.isSideOverlay }"
  >
    <div class="ml-2 pt-1">
      <button @click="userStor.isSideOverlay = !userStor.isSideOverlay">
        <i
          class="text-4xl cursor-pointer invert"
          :class="[userStor.isSideOverlay ? 'ri-close-fill' : 'ri-menu-2-line']"
        ></i>
      </button>
    </div>
    <div>
      <div class="relative ml-3">
        <div class="flex mr-5 gap-5">
          <ChangeTheme />
          <ChangeLang />
          <ProfileDD />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileDD from './ProfileDD.vue'
import ChangeLang from './ChangeLang.vue';
import ChangeTheme from './ChangeTheme.vue';
import { useUserStore } from '../../../../store/appState'
const userStor = useUserStore()
</script>

<style lang="scss" scoped></style>
