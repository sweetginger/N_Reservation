import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Shop from "./views/ShopView.vue";
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
      path: "/shop",
      name: "Shop",
      component: Shop
    },
    {
      path: "/main",
      name: "Main",
      component: HomeView
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopView
    },
    {
      path: "/shopOption",
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
