<template>
  <div class="calendarArea">
    <div class="calendarDiv">
      <Datepicker v-model="pickDate" :value="pickDate" :inline="true" />
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
      /** 데이트피커 날짜값 */
      pickDate: new Date()
    };
  },
  watch: {
    pickDate: function(newVal, oldVal) {
      this.setPickDate(this.formatDate(newVal));
    }
  },
  methods: {
    /** 데이트피커 날짜 포맷 */
    formatDate: function(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    /** 데이트피커 값 emit */
    setPickDate: function(val) {
      this.$emit("setPickDate", val);
    }
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
