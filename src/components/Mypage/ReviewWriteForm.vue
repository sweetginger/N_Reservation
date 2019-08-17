<template>
  <div class="reviewWriteFormArea">
    <p>(상품이미지)</p>
    <p>
      {{ product.productName }} -
      <span
        v-for="(item, idx) in product.reservationDetailList"
        :key="item.optionSeq"
        ><span v-if="idx > 0">, </span>{{ item.optionName }}
      </span>
    </p>
    <p>(예약날짜) 방문</p>
    <div class="starArea">
      <span class="star_1 active" @click="calcStarPoint(1)"
        ><i class="fas fa-star"></i
      ></span>
      <span class="star_2 active" @click="calcStarPoint(2)"
        ><i class="fas fa-star"></i
      ></span>
      <span class="star_3 active" @click="calcStarPoint(3)"
        ><i class="fas fa-star"></i
      ></span>
      <span class="star_4 active" @click="calcStarPoint(4)"
        ><i class="fas fa-star"></i
      ></span>
      <span class="star_5 active" @click="calcStarPoint(5)"
        ><i class="fas fa-star"></i
      ></span>
    </div>
    <!--
    <div class="starArea">
      <span
        v-for="n in 5"
        :key="n"
        class="active"
        :class="star_${n}"
        @click="calcStarPoint(n)"
        ><i class="fas fa-star"></i
      ></span>
    </div>
    -->
    <textarea
      v-model="reviewContent"
      placeholder="다음 이용자를 위해 방문 시 분위기나 서비스 만족도에 대해 적어 주세요. (최소 5자 이상)"
    ></textarea>
    <div class="btns">
      <span class="addBtn" @click="addReview()">리뷰 등록하기</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewWriteForm",
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {
      reviewContent: "",
      starPoint: 5
    };
  },
  methods: {
    /** 리뷰 등록 버튼 */
    addReview: async function() {
      await this.$reservationLib
        .addReview({
          reviewContent: this.reviewContent,
          bizSeq: this.product.bizSeq,
          userSeq: 0,
          optionSeq: this.product.reservationSeq,
          reservationSeq: this.product.reservationSeq,
          productSeq: this.product.productSeq,
          starPoint: this.starPoint
        })
        .then(() => {
          this.reviewContent = "";
          this.starPoint = 5;
        });
    },
    /** 별점 계산
     *  1. 클릭한 점수까지 active 클래스를 부여
     *  2. 초과점수 active 클래스 제거
     */
    calcStarPoint: function(point) {
      console.log(`~~~ ${point}`);
      this.starPoint = point;
      for (let i = 1; i <= point; i++) {
        document.querySelector(".star_" + i).classList.remove("active");
        document.querySelector(".star_" + i).classList.add("active");
      }
      if (point < 5) {
        for (let j = point + 1; j <= 5; j++) {
          document.querySelector(".star_" + j).classList.remove("active");
        }
      }
    }
  }
};
</script>

<style scoped>
.reviewWriteFormArea textarea {
  max-width: 800px;
  width: 80%;
  height: 200px;
  border: 1px solid;
  padding: 20px;
}
.btns {
  margin: 30px;
}
.addBtn {
  background: #03c75a;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
}
.starArea {
  margin: 20px 0;
}
[class^="star_"] {
  margin: 0 10px;
}
[class^="star_"] i {
  font-weight: 500;
  font-size: 50px;
  color: #e74c3c;
}
[class^="star_"].active i {
  font-weight: 600;
}
</style>
