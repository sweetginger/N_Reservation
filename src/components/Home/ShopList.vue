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
          <p>
            <img :src="item.img" />
          </p>
          <!-- <img :src="item.bizImageList[0].imgPath" /> -->
          <!-- <p>{{ item.bizImageList[0].imgSeq }}</p> -->
          <!-- <img :src="item.productImageList[0].imgPath" /> -->
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
    this.getShopList();
  },
  methods: {
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
  margin: 10px auto 0;
  border: 1px solid #bbb;
  padding: 10px;
}

.shopList li {
  float: left;
  border: 1px solid #bbb;
  padding: 10px;
  width: calc(100% / 5);
  height: 200px;
}

.shopList li:after,
.shopList:after {
  display: block;
  content: "";
  clear: both;
}
.shopList li img {
  width: 170px;
  height: 140px;
}
</style>
