<template>
  <div class="about">
    <ShopLocation></ShopLocation>
    <Calendar></Calendar>
    <TimeItem></TimeItem>
    <ItemOption></ItemOption>
    <SelectOption></SelectOption>
    <ItemQty></ItemQty>
    <ReserverInfo></ReserverInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopLocation from "../components/Shop/ShopLocation";
import Calendar from "../components/Shop/Calendar";
import TimeItem from "../components/Shop/TimeItem";
import ItemOption from "../components/Shop/ItemOption";
import SelectOption from "../components/Shop/SelectOption";
import ItemQty from "../components/Shop/ItemQty";
import ReserverInfo from "../components/Shop/ReserverInfo";

export default {
  components: {
    ShopLocation,
    Calendar,
    TimeItem,
    ItemOption,
    SelectOption,
    ItemQty,
    ReserverInfo
  }
};
</script>
<style></style>
