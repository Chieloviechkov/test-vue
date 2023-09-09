<template>
    <div>
      <ArrayTable :data="dataArray" />
    </div>
  </template>
  
  <script>
  import ArrayTable from '@/components/MainTable.vue';
  import { DataArray } from '@/components/ArrayToMainTable.js';

  
  export default {
    components: {
      ArrayTable,
    },
    
    data() {
    return {
      dataArray: DataArray,
    };
  },
};
</script>
  