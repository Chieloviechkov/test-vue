<template>
    <div class="d-flex bkg-white-title">
      <div class="title-head custom-hover-big text-nowrap bkg-black-title">
        {{ titleText }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titleText: String
    }
  };
  </script>
  <style scoped>
 @media screen and (max-width:767px) {
  .title-head{
     font-size: small;
     width: 15rem;
    }
  .bkg-white-title{
      width: 15.2rem;
      padding: 0.1rem;
      margin-left: 25%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    }
} 
  </style>
  