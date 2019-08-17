<template>
  <!--상품 소개 : 연주 -->
  <div class="productInfoArea">
    <div class="productPic">
      <img class="productImg" :src="productInfo.imgPath" />
    </div>
    <div class="productInfo">
      <h2>상품소개글</h2>
      <p>{{ productInfo.productName }}</p>
      <p>{{ productInfo.productDes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfoArea",
  data: function() {
    return {
      productInfo: []
    };
  },
  created: function() {
    this.getProductInfo();
    // alert(this.$route.params.productSeq);
  },
  methods: {
    getProductInfo: async function() {
      this.productInfo = await this.$reservationLib.getProductInfo(
        this.$route.params.productSeq
      );
    }
  }
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
  height: 400px;
}

.productImg {
  width: 100%;
  height: 100%;
}
</style>
