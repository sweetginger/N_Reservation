<template>
  <!-- 유림 -->
  <div class="shopArea">
    <div class="shopList">
      <ul>
        <li
          v-for="item in shopList"
          :key="item.bizSeq"
          class="shopitem"
          @click="goShop(item.bizSeq)"
        >
          <img :src="item.bizImageList[0]" />
          <p>{{ item.bizInfo.bizName }}</p>
          <p>{{ item.bizInfo.bizSimpleDes }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "@/router";
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
    },
    /** 매장 페이지로 연결 */
    goShop: function(reqSeq) {
      router.push(`/shop/${reqSeq}`);
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
