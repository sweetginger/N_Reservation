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
          <span class="title"><i class="far fa-calendar-alt"></i>이용예정</span>
          <span>1</span>
        </li>
        <li class="statusItem">
          <span class="title"
            ><i class="far fa-calendar-check"></i>이용완료</span
          >
          <span>12</span>
        </li>
        <li class="statusItem">
          <span class="title"><i class="fas fa-undo"></i>취소환불</span>
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
.myInfoArea {
  display: flex;
  border: 1px solid #bbb;
  height: 136px;
}
.profile {
  flex: 1 0 auto;
}

.reservationStatus {
  flex: 1 0 auto;
  padding: 10px;
}
.reservationStatus ul {
  display: flex;
  height: 100%;
}
.statusItem {
  flex: 1 0 auto;
  border-right: 1px solid #bbb;
  padding: 10px;
}
.statusItem:last-child {
  border-right: none;
}
</style>
