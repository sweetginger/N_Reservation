<template>
  <!--상품 소개 : 연주 -->
  <div class="productInfoArea">
    <div class="productPic">
      상품 사진
    </div>
    <div class="productInfo">
      상품 소개글
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfoArea"
};
</script>

<style scoped>
.productInfoArea {
  clear: both;
  width: 50%;
  height: 680px;
  background-color: #ddd;
  float: left;
}

.productPic {
  width: 100%;
  height: 100px;
}
</style>
