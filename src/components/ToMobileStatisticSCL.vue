<template>
    <div>
      <MobileStatisticKSL :matches="matchesData[0]" />
      <MobileStatisticKSL :matches="matchesData[1]" />
      <MobileStatisticKSL :matches="matchesData[2]" />
      <MobileStatisticKSL :matches="matchesData[3]" />
      <MobileStatisticKSL :matches="matchesData[4]" />
      <MobileStatisticKSL :matches="matchesData[5]" />
      <MobileStatisticKSL :matches="matchesData[6]" />
      <MobileStatisticKSL :matches="matchesData[7]" />
      <MobileStatisticKSL :matches="matchesData[8]" />
      <MobileStatisticKSL :matches="matchesData[9]" />
      <MobileStatisticKSL :matches="matchesData[10]" />
    </div>
  </template>
  
  
  <script>
  import MobileStatisticKSL from '@/components/MobileStatisticKSL.vue';
  import { matches } from '@/components/SCLstat.js';
  
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
  