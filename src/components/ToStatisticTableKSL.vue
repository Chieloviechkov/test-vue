<template>
    <div>
      <DataTable :dataRows="dataArray" />
    </div>
  </template>
  
  <script>
  import DataTable from '@/components/DataTable.vue';
  import { DataArray } from '@/components/ArrayKSL.js';
  
  export default {
    components: {
      DataTable,
    },
    data() {
    return {
        dataArray: DataArray,
    };
  },
};
</script>