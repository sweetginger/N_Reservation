<template>
  <!--사이트 메인 : 연주-->
  <div class="myDetailPopArea">
    <div class="myDetail">
      <button class="closeBtn" @click="closeBtn()">닫기</button>
      <div v-if="selectedUse" class="useInfo">
        <p class="reservationNum">{{ selectedUse.reservationSeq }}</p>
        <p class="bizName">매장명 : {{ selectedUse.bizName }}</p>
        <p class="bizSeq">{{ selectedUse.bizSeq }}</p>
        <p class="reservationNum">예약 일시 : {{ selectedUse.payDate }}</p>
        <p class="payType">결제방법 : {{ selectedUse.payType }}</p>
        <p class="totalPrice">가격 : {{ selectedUse.totalPrice }}</p>
      </div>
      <button class="reviewBtn">리뷰쓰기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDetailPopArea",
  props: {
    /** 넘겨받은 예약번호 */
    selectedUse: {
      type: Object
    }
  },
  data: function() {
    return {
      togglePopOn: true
    };
  },
  created: function() {
    // this.getSelectUse();
  },
  methods: {
    closeBtn: function() {
      this.togglePopOn = false;
      this.$emit("detailPopClose");
    },
    getSelectUse: async function() {
      const useList = await this.$reservationLib.getUseList(this.selectedUse);
      this.selectedUse = useList;
    }
  }
};
</script>

<style scoped>
.myDetailPopArea {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}

.myDetail {
  width: 430px;
  height: 400px;
  margin: auto;
  background: #fff;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}
.closeBtn {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
}

.useInfo {
  width: 100%;
  height: 80%;
}

.reviewBtn {
  width: 100%;
  height: 30px;
  background-color: #00c73c;
}
</style>
