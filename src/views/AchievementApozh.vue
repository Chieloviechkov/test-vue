<template>
    <div>
      <AchievementsApozh />
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import AchievementsApozh from '@/components/AchievementApozh.vue'
  
  export default {
    components: {
      AchievementsApozh,
    },
  }
  </script>
  <style scoped>
  </style>