<template>
  <!-- 유림 -->
  <div class="shopArea">
    <div class="shopList">
      <ul>
        <li v-for="item in shopList" :key="item.bizSeq" class="shopitem">
          <img src="" />
          <p>{{ item.bizName }}</p>
          <p>{{ item.bizSimpleDes }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  data: function() {
    return {
      shopName: "매장이름이에요",
      shopList: []
    };
  },
  created() {
    this.getTestList();
    this.getShopList();
  },
  methods: {
    /** 테스트리스트 불러오기 */
    getTestList: function() {
      console.log("불러와!");
      this.$reservationLib.getTest();
    },
    /** 매장 리스트 불러오기 */
    getShopList: async function() {
      this.shopList = await this.$reservationLib.getShopList();
    }
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
