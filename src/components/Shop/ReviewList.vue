<template>
  <!-- 유림 -->
  <div class="reviewArea">
    <div class="reviewChart">후기통계</div>
    <div class="reviewCategory">
      <ul>
        <li>후기카테고리1</li>
        <li>후기카테고리2</li>
        <li>후기카테고리3</li>
      </ul>
    </div>
    <div class="reviewList">
      <ul>
        <li class="reviewItem">후기1</li>
        <li class="reviewItem">후기2</li>
        <li class="reviewItem">후기3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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

.reviewItem {
  height: 100px;
  text-align: left;
}
</style>
