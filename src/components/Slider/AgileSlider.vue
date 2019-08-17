<template>
  <div class="sliderArea">
    <agile :options="sliderOption">
      <div v-for="n in 6" :key="n" class="slide" :class="`slide--${n}`">
        <h3>{{ n }}</h3>
      </div>
      <template slot="prevButton"
        ><i class="fas fa-chevron-left"></i
      ></template>
      <template slot="nextButton"
        ><i class="fas fa-chevron-right"></i
      ></template>
    </agile>
  </div>
</template>

<script>
import VueAgile from "vue-agile";

export default {
  components: {
    agile: VueAgile
  },
  data: function() {
    return {
      sliderOption: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false
            }
          },
          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
}

.agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 300px;
  justify-content: center;
}
.slide h3 {
  font-size: 32px;
  font-weight: 300;
}

.slide--1 {
  background-color: #f1c40f;
}

.slide--2 {
  background-color: #e67e22;
}

.slide--3 {
  background-color: #e74c3c;
}

.slide--4 {
  background-color: #9b59b6;
}

.slide--5 {
  background-color: #3498db;
}

.slide--6 {
  background-color: #2ecc71;
}
</style>
