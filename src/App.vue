<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const layout = computed (() => (route.meta.layout || 'empty') + '-layout')
</script>