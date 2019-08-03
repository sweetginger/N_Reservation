<template>
  <div class="selectOptionArea">
    <div class="selectOptionList">
      <ul>
        <li class="optionItem">옵션</li>
      </ul>
    </div>
    <div class="total">합계 : {{ totalValue }}</div>
  </div>
</template>

<script>
export default {
  name: "SelectOptionArea",
  data: function() {
    return {
      totalValue: 15
    };
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
