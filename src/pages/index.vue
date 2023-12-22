<template>
  <div>
    <div class="relative isolate px-6 lg:px-8">
      <TopPoligon />
      <GetStarted />
      <BottomPoligon />
    </div>

    <div class="relative pb-32 sm:pb-48 lg:pb-56">
      <TopPoligon />
      <RecentNews />
      <BottomPoligon />
    </div>

    <div class="relative pb-16 sm:pb-26 lg:pb-48">
      <TopPoligon />
      <InfoCards />
      <BottomPoligon />
    </div>
  </div>
</template>

<script setup>
import GetStarted from '../components/dashboard/GetStarted.vue'
import RecentNews from '../components/dashboard/RecentNews.vue'
import InfoCards from '../components/dashboard/InfoCards.vue'
import TopPoligon from '../components/shared/TopPoligon.vue'
import BottomPoligon from '../components/shared/BottomPoligon.vue'
</script>
