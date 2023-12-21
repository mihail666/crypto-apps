<template>
  <div class="relative isolate px-6 lg:px-8">
    <GetStarted />
  </div>

  <div class="mx-auto pb-32 sm:pb-48 lg:pb-56">
    <RecentNews />
  </div>

  <div class="mx-auto pb-16 sm:pb-26 lg:pb-48">
    <InfoCards />
  </div>
  
</template>

<script setup>
import GetStarted from '../components/dashboard/GetStarted.vue';
import RecentNews from '../components/dashboard/RecentNews.vue';
import InfoCards from '../components/dashboard/InfoCards.vue';
</script>

<style lang="scss" scoped></style>
