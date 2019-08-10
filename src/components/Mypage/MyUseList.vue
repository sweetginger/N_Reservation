<template>
  <div class="myUseListArea">
    <div class="useList">
      <p class="useTitle">내 예약</p>
      <ul>
        <li class="useList">정보</li>
        <li class="useList">정보1</li>
        <li class="useList">정보2</li>
        <li class="useList">정보3</li>
      </ul>
    </div>
    <pageBar></pageBar>
  </div>
</template>

<script>
import pageBar from "../Page";

export default {
  name: "MyUseListArea",
  components: { pageBar }
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
