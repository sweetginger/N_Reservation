<template>
  <!--재현-->
  <div class="locationArea">
    <div class="locationMap">지도지도</div>
    <div class="locationInfo">위치정보정보</div>
  </div>
</template>

<script>
export default {
  name: "LocationArea"
};
</script>

<style scoped>
.locationArea {
  border: 1px solid #bbb;
  display: flex;
  height: 550px;
  margin: 10px auto 0;
}

.locationMap {
  flex: 1 0 auto;
  background-color: #ddd;
}

.locationInfo {
  flex: 1 0 auto;
}
</style>
