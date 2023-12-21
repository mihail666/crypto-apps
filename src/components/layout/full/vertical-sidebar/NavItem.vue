<template>
  <!-- singl item -->
  <router-link
    role="button"
    :to="item.url"
    tabindex="0"
    class="flex navbutton items-center w-full p-3 mt-2"
  >
    <div class="grid place-items-center mr-2">
      <i class="text-xl text-current" :class="item.icon"></i>
    </div>
    <p class="text-md text-current">{{ item.title }}</p>
  </router-link>
</template>

<script setup>
const props = defineProps({ item: Object })
</script>

<style lang="scss" scoped></style>
