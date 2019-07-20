<template>
  <div class="about">
    <ShopLocation></ShopLocation>
    </br>
    <Calendar></Calendar>
    </br>
    <TimeItem></TimeItem>
    </br>
    <ItemOption></ItemOption>
    </br>
    <SelectOption></SelectOption>
    </br>
    <ItemQty></ItemQty>
    </br>
    <ReserverInfo></ReserverInfo>
    </br>
    <MyUseList></MyUseList>
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
import MyUseList from "../components/Mypage/MyUseList";

export default {
  components: {
    ShopLocation,
    Calendar,
    TimeItem,
    ItemOption,
    SelectOption,
    ItemQty,
    ReserverInfo,
    MyUseList
  }
};
</script>
<style></style>
