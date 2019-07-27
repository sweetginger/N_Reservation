<template>
  <!-- 유림 -->
  <div class="homeView">
    <div class="logo">로고영역</div>
    <HomeIntro @setSearch="val => (search = val)" />
    <ShopList v-if="search == true" />
    <div class="recommendArea">
      <RecommendBanner />
      <RecommendSlider />
    </div>
  </div>
</template> 

<script>
import HomeIntro from "../components/Home/HomeIntro";
import ShopList from "../components/Home/ShopList";
import RecommendBanner from "../components/Home/RecommendBanner";
import RecommendSlider from "../components/Home/RecommendSlider";
export default {
  components: {
    HomeIntro,
    ShopList,
    RecommendBanner,
    RecommendSlider
  },
  data: function() {
    return {
      search: false
    };
  }
};
</script>

<style scoped>
.recommendArea {
  display: flex;
}
.recommendArea div {
  width: 50%;
}
</style>
