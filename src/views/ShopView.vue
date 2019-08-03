<template>
  <div class="shopView">
    <Navigator />
    <ShopIntro />
    <ProductList />
    <ReviewList />
    <ShopLocation />
  </div>
</template>

<script>
import Navigator from "../components/Navigator.vue";
import ShopIntro from "../components/Shop/ShopIntro.vue";
import ProductList from "../components/Shop/ProductList.vue";
import ReviewList from "../components/Shop/ReviewList.vue";
import ShopLocation from "../components/Shop/ShopLocation.vue";

export default {
  components: {
    Navigator,
    ShopIntro,
    ProductList,
    ReviewList,
    ShopLocation
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

<style scoped>
.shopView {
  width: 1140px;
  margin: auto;
}
</style>
