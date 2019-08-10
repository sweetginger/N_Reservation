<template>
  <div class="myUseListArea">
    <div class="useList">
      <p class="useTitle">내 예약</p>
      <ul>
        <li v-for="item in reservationList" :key="item.userSeq" class="useItem">
          <p class="reservationNum">No.{{ item.reservationSeq }}</p>
          <p class="productName">이용한 상품 : {{ item.productName }}</p>
          <p class="bizSeq">{{ item.bizSeq }}</p>
          <p class="reservationNum">예약 일시 : {{ item.payDate }}</p>
          <p class="payType">결제방법 : {{ item.payType }}</p>
          <p class="price">가격 : 얼마얼마</p>
        </li>
      </ul>
    </div>
    <pageBar></pageBar>
  </div>
</template>

<script>
// import pageBar from "../Page";
export default {
  name: "MyUseListArea",
  data: function() {
    return {
      reservationList: []
    };
  },
  created() {
    this.getUseList();
  },
  methods: {
    getUseList: async function() {
      this.reservationList = await this.$reservationLib.getUseList(1);
    }
  }
  // components: { pageBar }
};
</script>

<style scoped>
.myUseListArea {
  margin: 10px 0;
}
.useList {
  padding: 18px 35px 22px 37px;
  border: 1px solid #ddd;
  background-color: #e9ecef;
}
ul {
  width: 80%;
  margin: 0 auto 10px;
}

.useList li {
  width: calc(50% - 10px);
  float: left;
  border: 1px solid;
  padding: 10px;
  margin: 10px 10px 0 0;
  height: 216px;
}
.useList li:nth-child(2n) {
  margin-right: 0;
}

.useList:after {
  content: "";
  display: block;
  clear: both;
}
</style>
