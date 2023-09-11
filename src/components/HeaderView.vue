<template>
     <header class= "header bkg-black">
      <router-link to="/">
        <img src="@/assets/MainLogo.png" alt="logotype" class="logo-img" />
      </router-link>
      <router-link to="/news" class="nav-a">НОВИНИ</router-link>
      <router-link to="/statistics" class="nav-a">СТАТИСТИКА</router-link>
      <router-link to="/photo" class="nav-a">ФОТО</router-link>
      <router-link to="/players" class="nav-a">ГРАВЦІ</router-link>
      <router-link to="/achievements" class="nav-a">ДОСЯГНЕННЯ</router-link>
      <nav class="navbar navbar-light bkg-white">
        <form class="form-inline" @submit.prevent="performSearch">
          <input
            v-model="searchQuery"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Пошук"
            aria-label="Search"
            />
            <img @click="performSearch" src="@/assets/search.svg" alt="search" class="searth" />
            <div v-for="(item, index) in searchResults" :key="index" class="search-result" :style="{ 'background-color': 'rgb(144, 19, 151)' }">
              <p class="result-name">{{ item.name }}</p>
            </div>
          </form>
        </nav>
      <div>
        <a @click="openLogin">
      <img src="@/assets/login.png" class="login" alt="login-icon" />
    </a>
        <a href="https://www.youtube.com/channel/UCqfBgKvk4KUgO8_sRfm_gXg">
          <img src="@/assets/youtube.png" class="social" alt="youtube-icon" />
        </a>
        <a href="https://www.instagram.com/apozhfc/">
          <img
            src="@/assets/instagram-icon.png"
            class="social"
            alt="instagram-icon"
          />
        </a>
      </div>
      <a href="https://ksl.co.ua/">
        <img src="@/assets/ksl.png" alt="KSL" class="logo-img-ksl" />
      </a>
    </header>
    <div id="login">
      <div @click="closeLogin" class="background-layer" v-if="activeComponent">
        <div v-if="activeComponent === 'login'">
          <LoginForm @close="closeLogin" />
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
import LoginForm from "@/components/LoginContainerApozh.vue";
import { DataArray } from '@/components/ArrayToMainTable.js';

export default {
  data() {
    return {
      activeComponent: null,
      searchQuery: "",
      searchResults: [],
    };
  },
  components: {
    LoginForm,
  },
  methods: {
    openLogin() {
    this.activeComponent = "login"; 
    document.body.style.overflow = "hidden"; 
  },
  
  closeLogin() {
    this.activeComponent = null;
    document.body.style.overflow = "auto"; 
  },
  performSearch() {
      const searchQuery = this.searchQuery.toLowerCase();
      this.searchResults = DataArray.filter((item) => {
        const itemName = item.name.toLowerCase();
        return itemName.includes(searchQuery);
      });
      setTimeout(() => {
        this.searchResults = [];
      }, 5000);
    },
  },
};
</script>
  <style scoped>
  input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
   @media (max-width: 767px) {
    #login .background-layer{
      margin-top: 4rem;
      width: 30rem;
      height: 70rem;
    }
  }
  .background-layer{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.850);
    width: 100%;
    height: 100%;
    z-index: 35;
  }
  .search-result{
    position: absolute;
    top: 3rem;
    left: 3rem;
    z-index: 10000;
    border-radius: 1rem;
    padding: 1rem;
    cursor: default;
  }
  </style>