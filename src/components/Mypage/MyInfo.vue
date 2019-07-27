<template>
  <!-- 유림 -->
  <div class="myInfoArea">
    <div class="profile">
      <div class="profileImg">
        <img src="d" />
      </div>
      <div class="nickname">
        <span class="profileName">다람쥐</span>
        <span class="profileId">hyr123</span>
      </div>
    </div>
    <div class="reservationStatus">
      <ul>
        <li class="statusItem">
          <span class="title">전체</span>
          <span>26</span>
        </li>
        <li class="statusItem">
          <span class="title">이용예정</span>
          <span>1</span>
        </li>
        <li class="statusItem">
          <span class="title">이용완료</span>
          <span>12</span>
        </li>
        <li class="statusItem">
          <span class="title">취소환불</span>
          <span>2</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
}
.myInfoArea div {
  width: 45%;
}
.profile {
}
.reservationStatus li {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
}
</style>
