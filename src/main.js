import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/** N_Reservation functions */
import * as reservationLib from "@/lib/Reservation.js";
Vue.prototype.$reservationLib = reservationLib;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
