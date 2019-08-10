<template>
  <div class="myPageView">
    <MyInfo />
    <MyUseList />
    <PromotionBanner />
    <MyDetailPop />
  </div>
</template>

<script>
import MyInfo from "../components/Mypage/MyInfo.vue";
import MyUseList from "../components/Mypage/MyUseList.vue";
import PromotionBanner from "../components/Mypage/PromotionBanner.vue";
import MyDetailPop from "../components/Mypage/MyDetailPop.vue";

export default {
  components: {
    MyInfo,
    MyUseList,
    PromotionBanner,
    MyDetailPop
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
.myPageView {
  width: 1140px;
  margin: auto;
}
</style>
