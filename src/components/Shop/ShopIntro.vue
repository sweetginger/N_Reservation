<template>
  <!--매장 소개 : 연주-->
  <div class="shopPicArea">
    <div class="shopPic">
      매장 사진 영역 (슬라이더 붙이고 적용예정)
      <!-- <Slider></Slider> -->
    </div>
    <div v-if="shopInfo" class="shopInfo">
      <p class="shopName">{{ shopInfo.bizName }}</p>
      <p class="shopDes" v-html="shopInfo.bizDes"></p>
    </div>
  </div>
</template>

<script>
// import Slider from "../Slider/Slider";

export default {
  name: "ShopIntro",
  components: {
    // Slider
  },
  data: function() {
    return {
      /** 매장정보 */
      shopInfo: {}
    };
  },
  created: function() {
    this.getShopInfo();
  },
  methods: {
    getShopInfo: async function() {
      const shop = await this.$reservationLib.getShop(
        this.$route.params.bizSeq
      );
      this.shopInfo = shop.bizInfo;
    }
  }
};
</script>

<style scoped>
.shopPicArea {
  width: 100%;
  height: 495px;
  background-color: #fff;
  border: 1px solid #bbb;
}
.shopPic {
  float: left;
  width: 50%;
  height: 100%;
}
.shopInfo {
  float: left;
  width: 50%;
  height: 100%;
  background-color: #ddd;
}

.shopInfo:after {
  display: block;
  clear: both;
  content: "";
}
.shopName {
  font-size: 20px;
  font-weight: bold;
  padding: 40px;
}
.shopDes {
  padding: 20px;
}
</style>
