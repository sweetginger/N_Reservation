<template>
  <!-- 유림 -->
  <div class="shopArea">
    <div class="shopList">
      <ul>
        <li class="shopitem ">매장1</li>
        <li class="shopitem ">매장2</li>
        <li class="shopitem ">매장3</li>
        <li class="shopitem ">매장4</li>
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
  },
  created() {
    this.getTestList();
  },
  methods: {
    /** 테스트리스트 불러오기 */
    getTestList: function() {
      console.log("불러와!");
      this.$reservationLib.getTest();
    }
  }
};
</script>

<style scoped>
.shopArea {
  width: 100%;
  height: 200px;
  margin: 10px auto 0;
  border: 1px solid #bbb;
}

.shopList {
  height: 180px;
}
ul {
  display: flex;
  padding: 10px;
  height: 100%;
}
.shopList li {
  flex: 1 0 auto;
  border: 1px solid #bbb;
  padding: 10px;
}
</style>
