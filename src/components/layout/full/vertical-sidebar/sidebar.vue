<template>
  <div class="leftSidebar bg-current/10 p-3 pt-1" :class="{Sidebar_open: userStore.isSideOverlay}">
    <!-- logo -->
    <NavLogo class="my-10"/>
    <template
      v-for="item in pages"
      :key="item"
    >
      <!---Single Item-->
      <NavItem
        :item="item"
        class="pl-5"
      />
    </template>
  </div>
</template>

<script setup>
import { pages } from './sidabarItem'
import { useUserStore } from '../../../../store/appState'
import NavLogo from '../logo/NavLogo.vue'
import NavItem from './NavItem.vue'

const userStore = useUserStore()

</script>

<style lang="scss" scoped></style>
