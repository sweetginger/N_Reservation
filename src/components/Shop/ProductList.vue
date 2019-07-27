<template>
  <!-- 유림 -->
  <div class="productArea">
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
ul {
  display: flex;
}
.productList li {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
}
</style>
