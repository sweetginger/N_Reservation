import Vue from "vue";
import Router from "vue-router";

import HomeView from "./views/HomeView.vue";
import ShopView from "./views/ShopView.vue";
import ShopOptionView from "./views/ShopOptionView.vue";
import MyPageView from "./views/MyPageView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Main",
      component: HomeView
    },
    {
      path: "/shop/:bizSeq",
      name: "Shop",
      component: ShopView
    },
    {
      path: "/shopOption/:productSeq",
      name: "ShopOption",
      component: ShopOptionView
    },
    {
      path: "/myPage",
      name: "MyPage",
      component: MyPageView
    }
  ]
});
