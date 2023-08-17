<template>
    <img :src="imagePath" :alt="altText" />
  </template>
  
  <script>
  export default {
    props: {
      imagePath: String,
      altText: String,
    },
  };
  </script>