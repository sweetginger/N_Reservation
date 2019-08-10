<template>
  <!-- 유림 -->
  <div class="reviewArea">
    <div class="reviewChart">후기통계</div>
    <!-- <div class="reviewCategory">
      <ul>
        <li>후기카테고리1</li>
        <li>후기카테고리2</li>
        <li>후기카테고리3</li>
      </ul>
    </div> -->
    <div class="reviewList">
      <ul>
        <li v-for="item in reviewList" :key="item.bizSeq" class="reviewItem">
          <p class="reviewText">{{ item.reviewContent }}</p>
          <p class="productName">이용한 상품명 : {{ item.productName }}</p>
          <p class="starPoint">별점 : {{ item.starPoint }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import router from "@/router";

export default {
  name: "ReviewList",
  data: function() {
    return {
      reviewList: []
    };
  },
  created() {
    this.getReviewList();
  },
  methods: {
    getReviewList: async function() {
      this.reviewList = await this.$reservationLib.getReviewList(
        this.$route.params.bizSeq
      );
    }
  }
};
</script>

<style scoped>
.reviewArea {
  margin: 10px auto 0;
  border: 1px solid #bbb;
}
.reviewChart {
  height: 196px;
  background-color: #ddd;
}
.reviewCategory {
  height: 150px;
}
.reviewCategory ul {
  display: flex;
  height: 100%;
}
.reviewCategory li {
  flex: 1 0 auto;
  border: 1px solid #bbb;
}

.reviewList {
  padding: 0 20px;
}

.reviewItem {
  padding: 10px 0;
  line-height: 1.5;
  text-align: left;
  font-size: 13px;
  border-bottom: 1px solid #ddd;
}

.productName {
  font-size: 13px;
  color: #8f8f8f;
}

.reviewItem:last-child {
  border-bottom: none;
}
</style>
