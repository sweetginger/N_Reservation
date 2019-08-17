<template>
  <!-- 유림 -->
  <div class="homeView">
    <HomeIntro @setSearch="val => (search = val)" />
    <ShopList v-if="search == true" />
    <div class="recommendArea">
      <RecommendBanner />
      <RecommendSlider />
    </div>
    <ReviewWriteForm />
  </div>
</template>

<script>
import HomeIntro from "../components/Home/HomeIntro";
import ShopList from "../components/Home/ShopList";
import RecommendBanner from "../components/Home/RecommendBanner";
import RecommendSlider from "../components/Home/RecommendSlider";
import ReviewWriteForm from "@/components/Mypage/ReviewWriteForm";

export default {
  components: {
    HomeIntro,
    ShopList,
    RecommendBanner,
    RecommendSlider,
    ReviewWriteForm
  },
  data: function() {
    return {
      search: false
    };
  }
};
</script>

<style scoped>
.homeView {
  width: 1140px;
  margin: auto;
}
.recommendArea {
  display: flex;
  height: 200px;
  padding: 10px;
  border: 1px solid #bbb;
  margin: 10px auto 0;
}
.recommendArea div {
  width: 50%;
}
</style>
