<template>
  <div class="shopView">
    <Navigator />
    <ShopIntro />
    <ProductList />
    <ReviewList />
    <ShopLocation />
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
import Navigator from "../components/Navigator.vue";
import ShopIntro from "../components/Shop/ShopIntro.vue";
import ProductList from "../components/Shop/ProductList.vue";
import ReviewList from "../components/Shop/ReviewList.vue";
import ShopLocation from "../components/Shop/ShopLocation.vue";
import ProductInfo from "../components/Shop/ProductInfo.vue";
import Calendar from "../components/Shop/Calendar.vue";
import TimeItem from "../components/Shop/TimeItem.vue";
import ItemOption from "../components/Shop/ItemOption.vue";
import SelectOption from "../components/Shop/SelectOption.vue";
import ItemQty from "../components/Shop/ItemQty.vue";
import ReserverInfo from "../components/Shop/ReserverInfo.vue";

export default {
  components: {
    Navigator,
    ShopIntro,
    ProductList,
    ReviewList,
    ShopLocation,
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

<style></style>
