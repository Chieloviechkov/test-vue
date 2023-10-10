<template>
  <div id="app">
    <PlatinumLeague></PlatinumLeague>
    <KSL></KSL>
    <SCL></SCL>
    <KWL></KWL>
    <button @click="scrollToTop" class="to-top">Нагору</button>
  </div>
</template>

<script>
import SCL from "@/components/SCL.vue";
import KWL from "@/components/KWL.vue";
import KSL from "@/components/KSL.vue";
import PlatinumLeague from "@/components/PlatinumLeagueTournament.vue";


export default {
  name: "App",
  components: {
    SCL,
    KWL,
    KSL,
    PlatinumLeague,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>






