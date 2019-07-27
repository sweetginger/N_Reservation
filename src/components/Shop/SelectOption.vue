<template>
  <div class="selectOptionArea">
    <div class="selectOptionList">
      <ul>
        <li class="optionItem">옵션1</li>
        <li class="optionItem">옵션2</li>
        <li class="optionItem">옵션3</li>
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
.selectOptionList {
  border: 1px steelblue solid;
}
.total {
  background-color: yellow;
}
</style>
