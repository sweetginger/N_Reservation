<template>
  <!-- 유림 -->
  <div class="productArea">
    <div class="totalProduct">총 {{ productList.length }}개</div>
    <div class="productList">
      <ul v-if="productList.length">
        <li
          v-for="item in productList"
          :key="item.productSeq"
          class="productItem"
          @click="goProduct(item.productSeq)"
        >
          <img :src="item.productImageList[0].imgPath" />
          <p>{{ item.product.productName }}</p>
          <p class="productDes">{{ item.product.productDes }}</p>
        </li>
      </ul>
      <ul v-else>
        <li>
          <p class="noList">예약 가능한 항목이 없습니다.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "ProductList",
  data: function() {
    return {
      productName: "상품이름이에요",
      productList: []
    };
  },
  created: function() {
    // alert("test");
    this.getProductList();
  },
  methods: {
    getProductList: async function() {
      this.productList = await this.$reservationLib.getProductList(
        this.$route.params.bizSeq
      );
    },

    goProduct: function(productSeq) {
      router.push(`/shopOption/${productSeq}`);
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
li .productDes {
  width: 150px;
}
p.noList {
  color: #03c75a;
  padding: 20px;
}
</style>
