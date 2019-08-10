import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

/** N_Reservation functions */
import * as reservationLib from "@/lib/Reservation.js";
Vue.prototype.$reservationLib = reservationLib;

/** vue carousel */
import VueCarousel from "@chenfengyuan/vue-carousel";
Vue.use(VueCarousel);
Vue.component(VueCarousel.name, VueCarousel);

Vue.config.productionTip = false;

new Vue({
  VueCarousel,
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
