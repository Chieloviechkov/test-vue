<template>
  <div id="app">
    <HeaderView></HeaderView> 
    <LastGames></LastGames>
    <router-view></router-view>
    <FooterApozh></FooterApozh>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'; 
import LastGames from './components/LastGames.vue';
import FooterApozh from './components/FooterApozh.vue';


export default {
  name: 'App',
  components: {
    HeaderView,
    LastGames,
    FooterApozh  
  },
  data() {
    return {
      
    };
  },
};

</script>

<style>
html{
  background-color: black
}
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
@import url('file:///C:/Users/chelo/OneDrive/Рабочий стол/TestVue.js/test-vue/src/Style.css');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

</style>
