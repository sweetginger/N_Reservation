<template>
  <div id="area1">
    <div id="area2"></div>
    <ShopList />
    <HelloWorld />
  </div>
</template>

<script>
import ShopList from "../components/Home/ShopList";
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    ShopList,
    HelloWorld
  },
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    goMain: function() {}
  }
};
</script>

<style></style>
