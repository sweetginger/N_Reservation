<template>
  <div class="shopOptionView">
    <ProductInfo />
    <div class="reservationOption">
      <Calendar />
      <TimeItem />
      <ItemOption />
      <SelectOption />
      <ItemQty />
      <ReserverInfo />
    </div>
  </div>
</template>

<script>
import ProductInfo from "../components/ShopOption/ProductInfo.vue";
import Calendar from "../components/ShopOption/Calendar.vue";
import TimeItem from "../components/ShopOption/TimeItem.vue";
import ItemOption from "../components/ShopOption/ItemOption.vue";
import SelectOption from "../components/ShopOption/SelectOption.vue";
import ItemQty from "../components/ShopOption/ItemQty.vue";
import ReserverInfo from "../components/ShopOption/ReserverInfo.vue";

export default {
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
      name: ""
    };
  },
  methods: {
    goMain: function() {}
  }
};
</script>

<style scoped>
.shopOptionView {
  width: 1140px;
  margin: auto;
}
</style>
