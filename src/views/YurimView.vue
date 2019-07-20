<template>
  <!-- 유림 -->
  <div class="yurimArea">
    <Navigator />
    <ShopList />
    <ProductList />
    <ReviewList />
    <MyInfo />
  </div>
</template>

<script>
import ShopList from "../components/Home/ShopList";
import ProductList from "../components/Shop/ProductList";
import ReviewList from "../components/Shop/ReviewList";
import Navigator from "../components/Navigator";
import MyInfo from "../components/Mypage/MyInfo";

export default {
  name: "HomeView",
  components: {
    ShopList,
    ProductList,
    ReviewList,
    Navigator,
    MyInfo
  }
};
</script>

<style></style>
