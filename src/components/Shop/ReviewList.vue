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
.reviewCategory ul {
  display: flex;
}
.reviewCategory li {
  border: 1px solid;
  padding: 5px;
  margin: 10px;
}
</style>
