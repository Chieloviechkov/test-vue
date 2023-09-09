<template>
    <div class="text-center p-5">
      <h1 class="text-light mb-4">Log in</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username" class="text-light font-size-big">Name</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="text-light">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="button text-light">OK</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        console.log("Логин: ", this.username);
        console.log("Пароль: ", this.password);
  
      
      },
    },
  };
  </script>
  
  <style scoped>
  .button{
    background-color: rgb(149, 9, 171);
    border: none;
    width: 5rem;
    height: 3rem;
    border-radius: 1rem;
    margin-top: 1rem;
  }
  .font-size-big{
    font-size: x-large;
  }
  .form-control{
    background-color: rgba(150, 9, 171, 0.315);
    border-radius: 1.5rem;
    border: none;
    color: white;
  }
  </style>