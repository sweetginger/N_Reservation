<template>
  <div class="itemOptionArea">
    <div class="optionList">
      옵션나오는 부분입니다.
      <ul>
        <li v-for="item in optionList" :key="item.optionSeq">
          <input
            type="checkbox"
            name="optionChk"
            :value="item.optionSeq"
            @change="selectOption(item)"
          />
          <!-- [{"optionSeq":7,"productSeq":2,"optionName":"린 헤어커트","optionDes":"배추김치 컷","price":12000,"regDate":null,"updDate":null},{"optionSeq":8,"productSeq":2,"optionName":"린 파마","optionDes":"무파마","price":30000,"regDate":null,"updDate":null}] -->
          {{ item.optionName }} 가격 : {{ item.price | priceFilter }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemOptionArea",
  filters: {
    priceFilter: function(value) {
      let num = new Number(value);
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    }
  },
  data: function() {
    return {
      optionList: [],
      /** 선택된 옵션들 */
      selectList: []
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
    },
    // selectOption(optionSeq, optionName) {
    selectOption(obj) {
      const idx = this.selectList.findIndex(function(item) {
        return item.optionSeq === obj.optionSeq;
      }); // findIndex = find + indexOf;
      if (idx > -1) {
        this.selectList.splice(idx, 1);
      } else {
        this.selectList.push(obj);
      }

      this.$emit("selectOptions", this.selectList);
    }
  }
};
</script>

<style scoped>
.optionList {
  border: 1px aqua solid;
}
</style>
