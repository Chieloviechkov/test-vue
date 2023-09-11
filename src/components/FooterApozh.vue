<template>
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">All rights reserved &copy; {{ currentYear }}</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style>
  .footer {
   padding-top: 1rem;
   padding-left: 8rem;
   cursor: default;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px){
    .footer{
      padding-left: 0rem;
    }
  }
  </style>
  