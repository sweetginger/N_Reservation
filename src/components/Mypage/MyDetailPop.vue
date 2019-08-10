<template>
  <!--사이트 메인 : 연주-->
  <div class="myDetailPopArea">
    <div class="myDetail">
      레이어팝업 영역
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDetailPopArea"
};
</script>

<style scoped>
.myDetailPopArea {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}

.myDetail {
  width: 430px;
  margin: auto;
  background: #fff;
}
</style>
