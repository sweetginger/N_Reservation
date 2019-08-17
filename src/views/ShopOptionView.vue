<template>
  <div class="shopOptionView">
    <ProductInfo />
    <div class="reservationOption">
      <Calendar @setPickDate="val => (pickDate = val)" />
      <TimeItem @setPickTime="val => (pickTime = val)" />
      <SelectOption :pick-date="pickDate" :pick-time="pickTime" />
      <ItemOption @selectOptions="val => (selectList = val)" />
      <!-- <ItemOption @selectOptions="val => refItemQty(val)" /> -->
      <!-- <ItemQty ref="itemQty" :select-option="selectList" /> -->
      <ItemQty :select-option="selectList" />
      <ReserverInfo />
    </div>
  </div>
</template>

<script>
import ProductInfo from "../components/ShopOption/ProductInfo.vue";
import Calendar from "@/components/ShopOption/Calendar";
import TimeItem from "../components/ShopOption/TimeItem.vue";
import ItemOption from "../components/ShopOption/ItemOption.vue";
import SelectOption from "../components/ShopOption/SelectOption.vue";
import ItemQty from "../components/ShopOption/ItemQty.vue";
import ReserverInfo from "../components/ShopOption/ReserverInfo.vue";

export default {
  name: "ShopOptionView",
  components: {
    ProductInfo,
    Calendar,
    TimeItem,
    ItemOption,
    SelectOption,
    ItemQty,
    ReserverInfo
  },
  data: function() {
    return {
      /** 데이트피커 날짜 값 */
      pickDate: "",
      pickTime: "",
      selectList: []
    };
  },
  methods: {
    goMain: function() {}
    // ,
    // refItemQty(val) {
    //   this.$refs.itemQty.testzz(val);
    // }
  }
};
</script>

<style scoped>
.shopOptionView {
  width: 1140px;
  margin: auto;
}
</style>
