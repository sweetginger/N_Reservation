<template>
  <div class="timeItemArea">
    <div class="timeArea">
      <ul class="timeList">
        <li>10:00</li>
        <li>12:00</li>
        <li>14:00</li>
        <li>16:00</li>
        <li>18:00</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeItemArea"
};
</script>

<style scoped>
.timeArea {
  border: 1px peru solid;
}
.timeList {
  display: flex;
  width: 50%;
  margin: 10px auto;
}
.timeList li {
  flex: 1;
  width: 100px;
  height: 30px;
  border: 1px solid #bbb;
}
</style>
