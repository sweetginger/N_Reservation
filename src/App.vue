<template>
  <div id="app">
    <HeaderView v-if="headerOn" />
    <router-view :header-on="headerOn" @setHeaderOn="val => (headerOn = val)" />
  </div>
</template>
<script>
import HeaderView from "@/views/HeaderView";

export default {
  components: {
    HeaderView
  },
  data: function() {
    return {
      headerOn: true
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
