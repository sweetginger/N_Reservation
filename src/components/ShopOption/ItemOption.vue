<template>
  <div class="itemOptionArea">
    <div class="optionList">
      옵션나오는 부분입니다.
      <ul>
        <li v-for="item in optionList" :key="item.optionSeq">
          {{ item.optionName }}
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
      optionList: []
    };
  },
  created: function() {
    this.getOptions();
    // alert(this.$route.params.productSeq);
  },
  methods: {
    getOptions: async function() {
      this.optionList = await this.$reservationLib.getOptions(
        this.$route.params.productSeq
      );
    }
  }
};
</script>

<style scoped>
.optionList {
  border: 1px aqua solid;
}
</style>
