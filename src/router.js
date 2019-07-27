import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Shop from "./views/ShopView.vue";
import Yurim from "./views/YurimView.vue";
import JooView from "./views/JooView.vue";
import HomeView from "./views/HomeView.vue";
import ShopView from "./views/ShopView.vue";
import MyPageView from "./views/MyPageView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop
    },
    {
      path: "/joo",
      name: "Joo",
      component: JooView
    },
    {
      path: "/yurim",
      name: "Yurim",
      component: Yurim
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
      path: "/myPage",
      name: "MyPage",
      component: MyPageView
    }
  ]
});
