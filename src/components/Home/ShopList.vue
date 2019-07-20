<template>
  <div class="shopList">
    <ul>
      <li>야호야호 !! ===> {{ shopName }}</li>
      <li class="hi">매장1</li>
      <li class="hi">매장2</li>
      <li class="hi">매장3</li>
    </ul>
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
.hi {
  font-size: 10px;
}
</style>
