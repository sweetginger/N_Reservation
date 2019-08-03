<template>
  <!-- 유림 -->
  <div class="productArea">
    <div class="totalProduct">
      총 n개
    </div>
    <div class="productList">
      <ul>
        <li class="productItem">상품1</li>
        <li class="productItem">상품2</li>
        <li class="productItem">상품3</li>
        <li class="productItem">상품4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data: function() {
    return {
      productName: "상품이름이에요"
    };
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
</style>
