<template>
  <div v-if="!isLoggedIn" class="text-center p-5">
    <h1 class="text-light mb-4">Log in</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="usernamelogin" class="text-light font-size-big">E-mail</label>
        <input
          type="text"
          id="usernamelogin"
          v-model="username"
          class="form-control"
          required
          @input="checkEmail"
        />
        <div class="text-light">{{ emailMessage }}</div>
      </div>
      <div class="form-group">
        <label for="passwordlogin" class="text-light">Password</label>
        <input
          type="password"
          id="passwordlogin"
          v-model="password"
          class="form-control"
          required
          @input="checkPassword"
        />
        <div class="text-light">{{ passwordMessage }}</div>
      </div>
      <button
        :disabled="!isFormValid"
        type="submit"
        class="button text-light"
        @click="handleLogin"
      >
        OK
      </button>
      <div v-if="loginError" class="text-light">{{ 'Невірний логін чи пароль'}}</div>
    </form>
  </div>
</template>


<script>
import { loginLink } from '@/components/config';

export default {
  data() {
    return {
      username: "",
      password: "",
      emailMessage: "",
      passwordMessage: "",
      isFormValid: false,
      loginError: false,
      userNotFound: false,
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      if (this.isFormValid) {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const formData = new URLSearchParams();
        formData.append("username", userData.username);
        formData.append("password", userData.password);

        fetch(loginLink , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        })
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else if (response.status === 401) {
            this.loginError = true;
            this.userNotFound = false;
            throw new Error('Unauthorized');
          } else if (response.status === 404) {
            this.loginError = false;
            this.userNotFound = true;
            throw new Error('User not found');
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          if (data === 'Login successful!') {
            this.isLoggedIn = true;
            this.$store.dispatch('login');
            this.closeModal();
          } else if (data === 'Invalid password') {
            this.loginError = true;
          }
        })
        .catch((error) => {
          if (error.message !== 'Unauthorized' && error.message !== 'User not found') {
            console.error('Ошибка:', error);
          }
        });
      }
    },
    checkEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailPattern.test(this.username)) {
        this.emailMessage = "";
      } else {
        this.emailMessage = "Некоректний логін";
      }
      this.validateForm();
    },
    checkPassword() {
      const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
      if (passwordPattern.test(this.password)) {
        this.passwordMessage = "";
      } else {
        this.passwordMessage = "Пароль повинен мати хоча б одне число, одну велику літеру, та довжину більше 8 символів";
      }
      this.validateForm();
    },
    validateForm() {
      this.isFormValid = this.emailMessage === "" && this.passwordMessage === "";
    },
    closeModal() {
      this.$emit('close');
    },
  },
}
  
</script>

<style scoped>
.button {
  background-color: rgb(149, 9, 171);
  border: none;
  width: 5rem;
  height: 3rem;
  border-radius: 1rem;
  margin-top: 1rem;
}
.font-size-big {
  font-size: x-large;
}
.form-control {
  background-color: rgba(150, 9, 171, 0.315);
  border-radius: 1.5rem;
  border: none;
  color: white;
}
</style>
