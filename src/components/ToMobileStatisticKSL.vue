<template>
    <div>
      <MobileStatisticKSL :matches="matchesData[0]" />
      <MobileStatisticKSL :matches="matchesData[1]" />
      <MobileStatisticKSL :matches="matchesData[2]" />
      <MobileStatisticKSL :matches="matchesData[3]" />
      <MobileStatisticKSL :matches="matchesData[4]" />

    </div>
  </template>
  
  
  <script>
  import MobileStatisticKSL from '@/components/MobileStatisticKSL.vue';
  import { matches } from '@/components/KSLstat.js';
  
  export default {
    components: {
      MobileStatisticKSL,
    },
    
    data() {
      return {
        matchesData: matches,
      };
    },
  };
  </script>
  