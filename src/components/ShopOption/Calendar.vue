<template>
  <div class="calendarArea">
    <div class="calendarDiv">
      <Datepicker
        v-modal="pickDate"
        :value="defaultDate"
        :inline="true"
        @change="val => setPickDate(val)"
      />
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
      defaultDate: new Date(),
      pickDate: ""
    };
  },
  methods: {
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
