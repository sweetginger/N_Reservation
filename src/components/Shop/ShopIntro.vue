<template>
  <!--매장 소개 : 연주-->
  <div class="shopPicArea">
    <div class="shopPic">
      매장 사진 영역
      <!-- <Slider></Slider> -->
    </div>
    <div class="shopInfo">
      매장 소개 글 영역
    </div>
  </div>
</template>

<script>
// import Slider from "../Slider/Slider";

export default {
  name: "ShopIntro",
  components: {
    // Slider
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
</style>
