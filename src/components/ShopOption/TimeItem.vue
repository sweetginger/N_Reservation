<template>
  <div class="timeItemArea">
    <div class="timeArea">
      <ul class="timeList">
        <li
          v-for="item in timeItems"
          :key="item.index"
          @click="selectTime(item.time)"
        >
          {{ item.time }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeItemArea",
  data: function() {
    return {
      timeItems: [
        { time: "10:00" },
        { time: "11:00" },
        { time: "12:00" },
        { time: "13:00" },
        { time: "14:00" },
        { time: "15:00" },
        { time: "16:00" },
        { time: "17:00" },
        { time: "18:00" }
      ]
    };
  },
  methods: {
    selectTime(val) {
      this.$emit("setPickTime", val);
    }
  }
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
