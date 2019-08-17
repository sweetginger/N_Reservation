<template>
  <div id="app">
    <header>header영역</header>
    <div id="nav">
      <router-link to="/">홈</router-link>
      <router-link to="/shop">매장뷰</router-link>
      <router-link to="/shopOption">매장옵션뷰</router-link>
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
  right: 20px;
}

#nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* 네이버 예약 프로젝트 홈 전역 스타일 */
/*reset*/
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: top;
  list-style: none;
  font-family: "Nanum Gothic", sans-serif;
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

input,
select {
  padding: 5px 15px;
  border: 1px solid #dadada;
  background-color: #fff;
  font-size: 13px;
  color: #000;
}
</style>
