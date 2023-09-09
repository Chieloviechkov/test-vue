<template>
  
      <div class="container-all">
        <NewsMini></NewsMini>
        <MainSlider></MainSlider>
        <MainTable></MainTable>
      </div>

  </template>
  <script>
    import NewsMini from '@/components/NewsMini.vue';
    import MainSlider from '@/components/MainSlider.vue'; 
    import MainTable from '@/components/ToMainTable.vue';  
    export default {
  name: 'App',
  components: {
    NewsMini,
    MainSlider,
    MainTable,
    
    
  },
  data() {
    return {
      
    };
  },
};

</script>
<style scoped>

</style>