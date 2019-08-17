<template>
  <div class="selectOptionArea">
    <div class="selectOptionList">
      <ul>
        <li class="title">날짜</li>
        <li>{{ pickDate }} {{ pickTime }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOptionArea",
  props: {
    pickDate: {
      type: String,
      default: ""
    },
    pickTime: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.selectOptionArea {
  border: 1px red solid;
}
.total {
  background-color: yellow;
}
</style>
