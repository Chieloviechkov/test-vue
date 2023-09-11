<template>
  <div id="login">
  <div class="login-container" @click.stop>
  <div class="pr">
        <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" v-model="showRegister" />
        <label for="reg-log"></label>
        <div class="card-3d-wrap mx-auto">
          <div class="card-3d-wrapper">
            <div class="card-front" :class="{ 'd-none': showRegister }">
              <LoginApozh @close="closeLogin"></LoginApozh>
            </div>
            <div class="card-back" :class="{ 'd-none': !showRegister }">
              <RegisterApozh @close="closeRegister"></RegisterApozh>
            </div>
          </div>
      </div>
    </div>
</div>
</div>

</template>

<script>
import LoginApozh from "@/components/LoginApozh.vue";
import RegisterApozh from "@/components/RegisterApozh.vue";

export default {
  components: {
    LoginApozh,
    RegisterApozh,
  },
  data() {
    return {
      showRegister: false,
    };
  },
  methods: {
    closeRegister() {
      this.showRegister = false;
    },
    login() {
    
    },
    closeLogin() {
      this.$emit("close"); 
    },
    
  },
};
</script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
  @media (max-width: 767px) {
    #login .login-container{
      margin-left: 1rem;
    }
  }
.pr{
  position: relative;
}
.login-container{
  background-color: rgba(139, 120, 153, 0.95);
  padding: 0.5rem;
  border-radius: 1rem;
  margin-left: 35%;
  width: fit-content;
  margin-top: 1rem;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
display: none;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #6f0db5;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before{
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
  background-color: #660891;
  content: '';
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}
.card-3d-wrap {
  position: relative;
  width: 27rem;
  max-width: 100%;
  height: 30rem;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 1rem;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}
.card-front{
  width: 100%;
  height: 100%;
  background-image: url('@/assets/login-bkg.png');
  background-position: center;
  background-size: cover;
  position: absolute;
  border-radius: 3rem;
  transform-style: preserve-3d;
}

.card-back {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/login-bkg2.png');
  
  background-position: center;
  background-size: cover;
  position: absolute;
  border-radius: 3rem;
  transform-style: preserve-3d;
  transform: rotateY(180deg); 
}

.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

  </style>