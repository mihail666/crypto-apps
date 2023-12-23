<template>
  <div class="">
    <!-- loader? -->
    <div class="relative">
      <Sidebar />
      <HeaderBar />
      <main
        class="app-content"
        :class="{ appFull: userStor.isSideOverlay }"
      >
        <div class="">
          <div class="container">
            <RouterView />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/full/vertical-sidebar/VerticalSidebar.vue'
import HeaderBar from '../components/layout/full/horizontal-header/HorizontalHeader.vue'
import { useUserStore } from '../store/appState'
const userStor = useUserStore()
</script>

<style lang="scss" scoped></style>
