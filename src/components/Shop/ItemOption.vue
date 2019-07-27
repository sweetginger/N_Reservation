<template>
  <div class="itemOptionArea">
    <div class="optionList">
      <ul>
        <li>
          <label for="op1"><input id="op1" type="checkbox" />여성커트</label>
        </li>
        <li>
          <label for="op2"><input id="op2" type="checkbox" />남성커트</label>
        </li>
        <li>
          <label for="op3"><input id="op3" type="checkbox" />베이비펌</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemOptionArea"
};
</script>

<style scoped>
.optionList {
  border: 1px aqua solid;
}
</style>
