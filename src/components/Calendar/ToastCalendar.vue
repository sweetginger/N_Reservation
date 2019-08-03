<template>
  <div class="calendarArea">
    <Calendar></Calendar>
  </div>
</template>

<script>
import "tui-calendar/dist/tui-calendar.css";
import Calendar from "@toast-ui/vue-calendar/src/Calendar.vue";

export default {
  name: "ToastCalendar",
  components: {
    Calendar
  },
  data: function() {},
  methods: {}
};
</script>

<style></style>
