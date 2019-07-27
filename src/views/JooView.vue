<template>
  <div class="">
    <HomeIntroVue />
    <ShopIntroVue />
    <ProductInfoVue />
    <PromotionBannerVue />
    <MyDetailPopVue />
  </div>
</template>

<script>
import HomeIntroVue from "../components/Home/HomeIntro.vue";
import ShopIntroVue from "../components/Shop/ShopIntro.vue";
import ProductInfoVue from "../components/Shop/ProductInfo.vue";
import PromotionBannerVue from "../components/Mypage/PromotionBanner.vue";
import MyDetailPopVue from "../components/Mypage/MyDetailPop.vue";

export default {
  name: "JooView",
  components: {
    ShopIntroVue,
    ProductInfoVue,
    PromotionBannerVue,
    MyDetailPopVue,
    HomeIntroVue
  }
};
</script>

<style></style>
