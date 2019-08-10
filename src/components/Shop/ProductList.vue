<template>
  <!-- 유림 -->
  <div class="productArea">
    <div class="totalProduct">
      총 n개
    </div>
    <div class="productList">
      <ul>
        <li
          v-for="item in productList"
          :key="item.productSeq"
          class="productItem"
          @click="goProduct(item.prouctSeq)"
        >
          <img :src="item.productImageList[0].imgPath" />
          <p>{{ item.product.productName }}</p>
          <p>{{ item.productImageList.imgPath }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import router from "@/router";
export default {
  name: "ProductList",
  data: function() {
    return {
      productName: "상품이름이에요",
      productList: []
    };
  },
  created: function() {
    this.getProductList();
  },
  methods: {
    getProductList: async function() {
      this.productList = await this.$reservationLib.getProductList(
        this.$route.params.bizSeq
      );
    }
  }
};
</script>

<style scoped>
.totalProduct {
  text-align: left;
  margin-bottom: 5px;
}
.productArea {
  width: 100%;
  border: 1px solid #bbb;
  margin: 10px auto 0;
  padding: 10px;
}
.productList {
  height: 180px;
}
ul {
  display: flex;
  height: 180px;
}
.productList li {
  flex: 1 0 auto;
  border: 1px solid #bbb;
}
li img {
  width: 170px;
}
</style>
