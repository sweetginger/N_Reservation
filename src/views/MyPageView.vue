<template>
  <div class="myPageView">
    <MyInfo :reservation-info="reservationInfo" />
    <MyUseList @setReservationInfo="obj => (reservationInfo = obj)" />
    <PromotionBanner />
    <!-- <MyDetailPop /> -->
  </div>
</template>

<script>
import MyInfo from "../components/Mypage/MyInfo.vue";
import MyUseList from "../components/Mypage/MyUseList.vue";
import PromotionBanner from "../components/Mypage/PromotionBanner.vue";
// import MyDetailPop from "../components/Mypage/MyDetailPop.vue";

export default {
  components: {
    MyInfo,
    MyUseList,
    PromotionBanner
    // MyDetailPop
  },
  data: function() {
    return {
      name: "MyPageView",
      /** 예약 리스트 */
      reservationInfo: []
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
