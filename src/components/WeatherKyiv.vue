<template>
    <div v-if="isAuthenticated" class="cont-weather box-shadow">
      <img :src="require(`@/assets/temperature.png`)" alt="Температура" class="temperature-card">
      <span class="fiolet-color text-align-center">{{ temperature }} °C</span>
      <img v-if="weatherCode === null" :src="require(`@/assets/unknown.png`)" alt="Неизвестно" class="weather-card fiolet-color">
      <img v-else-if="isRainy" :src="require(`@/assets/rain.png`)" alt="Дождь" class="weather-card-icon fiolet-color">
      <img v-else-if="isSnowy" :src="require(`@/assets/snow.png`)" alt="Снег" class="weather-card-icon fiolet-color">
      <img v-else-if="isSunny" :src="require(`@/assets/sun.png`)" alt="Солнечно" class="weather-card-icon fiolet-color">
      <img v-else-if="isStormy" :src="require(`@/assets/storm.png`)" alt="Гроза" class="weather-card-icon fiolet-color">
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      temperature: null,
      weatherCode: null,
      dataRefreshInterval: null,
    };
  },
  async created() {
    try {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      this.$store.dispatch('login');
    }
      this.loadCachedWeatherData();
      await this.loadWeatherData();

      this.dataRefreshInterval = setInterval(async () => {
        await this.loadWeatherData();
      }, 60 * 60 * 1000);
    } catch (error) {
      console.error('Ошибка при инициализации компонента:', error);
    }
  },
  beforeUnmounted() {
    clearInterval(this.dataRefreshInterval);
  },  
  computed: {
    ...mapGetters(['isAuthenticated']),
    isRainy() {
      return this.weatherCode >= 4000 && this.weatherCode < 5000;
    },
    isSnowy() {
      return this.weatherCode >= 5000 && this.weatherCode < 6000;
    },
    isSunny() {
      return this.weatherCode >= 1000 && this.weatherCode < 2000;
    },
    isStormy() {
      return this.weatherCode >= 8000 && this.weatherCode < 9000;
    },
  },
  methods: {
    async loadWeatherData() {
      try {
        const apiKey = 'eoDOFox9IEGrAfnFvqgqYSKDdX6tD8Vn';
        const latitude = '50.4501';
        const longitude = '30.5234';

        const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature,weatherCode&timesteps=1h&units=metric&apikey=${apiKey}`;

        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        const interval = weatherData.data.timelines[0].intervals[0];
        this.temperature = interval.values.temperature;
        this.weatherCode = interval.values.weatherCode;

        localStorage.setItem('weatherDataCache', JSON.stringify(weatherData));
        
      } catch (error) {
        console.error('Ошибка при запросе к API:', error);
        throw error;
      }
    },
    loadCachedWeatherData() {
      const cachedWeatherData = localStorage.getItem('weatherDataCache');
      if (cachedWeatherData) {
        const parsedData = JSON.parse(cachedWeatherData);
        const interval = parsedData.data.timelines[0].intervals[0];
        this.temperature = interval.values.temperature;
        this.weatherCode = interval.values.weatherCode;
      }
    },
  },
};
</script>

<style scoped>
.weather-card-icon{
  width: 5rem;
}
@media (max-width: 767px) {
  .cont-weather{
    display: none;
  }
}
</style>
