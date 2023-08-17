<template>
  <div class="body">
    <div class="text-body">
      <div class="hello">
          <h1 class="header-text" v-html="myTextProp"></h1>
        <p>{{ myAdditionalTextProp }}</p>
      </div>
    </div>
    <div class="flex">
      <div id="app" class="box">
        <CardList/>
      </div>

</div>

  </div>
</template>


<script>
import CardList from './CardList.vue';export default {
  name: 'HelloWorld',
  components:{
    CardList
  },
  props: {
    myTextProp: String,
    myAdditionalTextProp: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
display: flex;
flex-direction: column;
padding: 3rem 20% 0 20%;
}
.header-text {
  text-align: left;
}
.text-body{
  width: 49.75rem;
}
.flex{
  display: flex;
}
.hello{
  flex-direction: column;
}
h1 {
  width: 49.75rem;
color: #2D3640;
font-size: 2.4rem; 
font-style: normal;
font-weight: 600;
letter-spacing: -0.03125rem;
}
p{
  text-align: left;
  width: 34.75rem;
color: #2B292D;
font-size: 1rem; 
font-style: normal;
font-weight: 400;
}
</style>
