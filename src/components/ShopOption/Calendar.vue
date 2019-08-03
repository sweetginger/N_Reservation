<template>
  <div class="calendarArea">
    <div class="calendarDiv">
      달력 공간
    </div>
    div.
  </div>
</template>

<script>
export default {
  name: "CalendarArea"
};
</script>

<style scoped>
.calendarArea {
  width: 50%;
  float: right;
  height: 450px;
}
.calendarArea:after {
  clear: both;
  content: "";
  display: block;
}

.calendarDiv {
  height: 100%;
  border: 1px solid #bbb;
}
</style>
