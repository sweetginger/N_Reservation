<template>
  <div class="my-slider">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>
<script>
import { tns } from "@/../node_modules/tiny-slider/src/tiny-slider";
export default {
  mounted: function() {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: "page",
      autoplay: true,
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }
    });
    slider.play();
  }
};
</script>
<style scoped></style>
