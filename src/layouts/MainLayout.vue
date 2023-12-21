<template>
  <div class="">
    <!-- loader? -->
    <div class="relative">
      <Sidebar />
      <HeaderBar />
      <main class="app-content">
        <div
          class="page-wrapper"
          :class="{ full: userStor.isSideOverlay }"
        >
          <div class="container">
            <RouterView />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/layout/full/vertical-sidebar/sidebar.vue'
import HeaderBar from '../components/layout/full/horizontal-header/Header.vue'
import { useUserStore } from '../store/appState'
const userStor = useUserStore()
</script>

<style lang="scss" scoped></style>
