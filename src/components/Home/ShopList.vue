<template>
  <!-- 유림 -->
  <div class="shopArea">
    <div class="shopList">
      <ul>
        <li class="shopitem">매장1</li>
        <li class="shopitem">매장2</li>
        <li class="shopitem">매장3</li>
        <li class="shopitem">매장4</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  data: function() {
    return {
      shopName: "매장이름이에요"
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
}
.shopList li {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
}
</style>
