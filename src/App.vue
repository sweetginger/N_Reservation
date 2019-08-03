<template>
  <div id="app">
    <header>header영역</header>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/shop">Shop</router-link>|
      <router-link to="/yurim">유림</router-link>|
      <router-link to="/joo">joo</router-link>| -->
      <router-link to="/main">홈</router-link>|
      <router-link to="/shop">매장뷰</router-link>|
      <router-link to="/shopOption">매장옵션뷰</router-link>|
      <router-link to="/myPage">마이페이지</router-link>
    </div>
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: absolute;
  right: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
li {
  list-style: none;
}

/* 네이버 예약 프로젝트 홈 전역 스타일 */
/*reset*/
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
}

header {
  width: 100%;
  height: 57px;
  background-color: #03c75a;
  margin-bottom: 20px;
}
</style>
