<template>
  <div class="calendarArea">
    <div class="calendarDiv">
      <Datepicker :value="date" />
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "CalendarArea",
  components: {
    Datepicker
  },
  data: function() {
    return {
      date: new Date()
    };
  }
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
