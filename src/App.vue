<template>
  <div id="app">
    <my-component
      :myTextProp="textFromParent"
      :myAdditionalTextProp="additionalTextFromParent"
    />
    
  </div>
</template>

<script>
import MyComponent from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    MyComponent,

  },
  data() {
    return {
      textFromParent: "Best Developers <span style='font-weight: normal;'>On The Planet</span>",
      additionalTextFromParent: "This Product integrates with your favorite apps to automate workflows and ensure smooth, productive work days.",
    };
  },
};

</script>

<style>
html{
  background: rgba(0, 161, 198, 0.05);
}
#app {
  font-family: IBM Plex Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
</style>
