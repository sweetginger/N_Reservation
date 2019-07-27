<template>
  <div class="myUseListArea">
    <div class="useList">
      <ul>
        <li class="useList">정보</li>
        <li class="useList">정보1</li>
        <li class="useList">정보2</li>
        <li class="useList">정보3</li>
      </ul>
    </div>
    <pageBar></pageBar>
  </div>
</template>

<script>
import pageBar from "../Page";

export default {
  name: "MyUseListArea",
  components: { pageBar }
};
</script>

<style scoped>
.myUseListArea {
  border: 1px firebrick solid;
}

ul {
  display: flex;
}

.useList li {
  display: flex-item;
  border: 1px solid;
  padding: 10px;
  margin: 10px;
}
</style>
