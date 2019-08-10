<template>
  <div class="itemOptionArea">
    <div class="optionList">
      <ul>
        <li v-for="item in list">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemOptionArea",
  data: function() {
    return {
      list: ["여성커트", "남성커트", "여성펌"]
    };
  }
};
</script>

<style scoped>
.optionList {
  border: 1px aqua solid;
}
</style>
