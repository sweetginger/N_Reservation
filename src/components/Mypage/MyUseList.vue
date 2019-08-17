<template>
  <div class="myUseListArea">
    <div class="useList">
      <p class="useTitle">내 예약</p>
      <ul>
        <li
          v-for="item in reservationList"
          :key="item.userSeq"
          class="useItem"
          @click="togglePopUp(item)"
        >
          <p class="reservationNum">{{ item.reservationSeq }}</p>
          <p class="bizName">매장명 : {{ item.bizName }}</p>
          <p class="bizSeq">{{ item.bizSeq }}</p>
          <p class="reservationNum">예약 일시 : {{ item.payDate }}</p>
          <p class="payType">결제방법 : {{ item.payType }}</p>
          <p class="totalPrice">가격 : {{ item.totalPrice }}</p>
        </li>
      </ul>
    </div>
    <toggle-pop-on
      v-if="togglePopOn == true"
      :selected-use="selectedUse"
      @detailPopClose="closeBtn()"
    ></toggle-pop-on>
    <!-- <pageBar></pageBar> -->
  </div>
</template>

<script>
import togglePopOn from "./MyDetailPop.vue";
// import pageBar from "../Page";
export default {
  name: "MyUseListArea",
  components: { togglePopOn },
  data: function() {
    return {
      reservationList: [],
      togglePopOn: false,
      /** 선택한 예약 번호  */
      selectedUse: 0
    };
  },
  created() {
    this.getUseList();
  },
  methods: {
    getUseList: async function() {
      this.reservationList = await this.$reservationLib.getUseList(
        // TODO :: 로그인 유저 번호 넣기
        1
      );
    },
    togglePopUp: function(reservationObj) {
      this.selectedUse = reservationObj;
      this.togglePopOn = true;
    },
    closeBtn: function() {
      this.togglePopOn = false;
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
