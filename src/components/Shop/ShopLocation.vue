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
  border: 1px red solid;
  display: flex;
}

.locationMap {
  border: 1px green solid;
  width: 50%;
}

.locationInfo {
  border: 1px blue solid;
  width: 50%;
}
</style>
