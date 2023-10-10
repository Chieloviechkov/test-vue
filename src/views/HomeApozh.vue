<template>
  
      <div class="container-all">
        <NewsMini></NewsMini>
        <MainSlider></MainSlider>
        <PlatinumLeague></PlatinumLeague>
      </div>
  </template>
  <script>
    import NewsMini from '@/components/NewsMini.vue';
    import MainSlider from '@/components/MainSlider.vue'; 
    import PlatinumLeague from '@/components/PlatinumLeague.vue';  
    export default {
  name: 'App',
  components: {
    NewsMini,
    MainSlider,
    PlatinumLeague,
    
    
  },
  data() {
    return {
      
    };
  },
};

</script>
<style scoped>

</style>