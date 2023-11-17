<template>
  <div class="text-center p-5">
    <h1 class="text-light mb-4">Sign up</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username" class="text-light font-size-big">E-mail</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="form-control"
          required
          @input="checkEmail"
        />
        <div class="text-light">{{ emailMessage }}</div>
        <div class="text-light">{{ registrationMessage }}</div>

      </div>
      <div class="form-group">
        <label for="password" class="text-light">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          required
          @input="checkPassword"
        />
        <div class="text-light">{{ passwordMessage }}</div>
      </div>
      <button :disabled="!isFormValid" class="button text-light">OK</button>
    </form>
  </div>
</template>

<script>
import { registerLink } from '@/components/config';

export default {
  data() {
    return {
      username: "",
      password: "",
      emailMessage: "",
      passwordMessage: "",
      isFormValid: false,
      registrationMessage: '', 
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
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
    register() {
      if (this.isFormValid) {
        const userData = {
          username: this.username,
          password: this.password,
        };

        fetch(registerLink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `username=${userData.username}&password=${userData.password}`,
        })
          .then((response) => response.text())
          .then((data) => {
            if (data === 'Registration successful!') {
              this.registrationMessage = 'Реєстрація успішна!';
            } else {
              this.registrationMessage = "Користувач з таким логіном вже існує"; 
            }
            this.username = "";
            this.password = "";
            this.emailMessage = "";
            this.passwordMessage = "";
            this.isFormValid = false;
          })
          .catch((error) => {
            console.error('Ошибка:', error);
          });
  }
},
  },
};
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
