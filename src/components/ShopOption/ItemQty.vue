<template>
  <div class="itemQtyArea">
    <div class="itemQty">
      상품선택,수량
      <!-- {{ selectOption.optionSeq }} -->
      <p v-for="item in selectOption" :key="item.optionSeq">
        {{ item.optionName }}
      </p>
      {{ totalPrice }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemQtyArea",
  props: {
    selectOption: {
      type: Array,
      default: null
    }
  },
  data: function() {
    return { totalPrice: 0 };
  },
  watch: {
    selectOption: function() {
      this.totalPrice = 0;
      for (let i = 0; i < this.selectOption.length; i++) {
        this.totalPrice += this.selectOption[i].price;
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
.itemQty {
  border: 1px darkblue solid;
}
</style>
