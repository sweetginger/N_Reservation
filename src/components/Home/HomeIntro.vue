<template>
  <!--사이트 메인 : 연주-->
  <div class="homeIntroArea">
    <div class="searchWrap">
      <select name="카테고리">
        <option value="">- 선택 -</option>
        <option value="1">샵</option>
        <option value="2">이용권</option>
        <option value="3">숙박</option>
      </select>
      <input
        v-model="searchText"
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <button @click="goSearch()"><i class="fas fa-search"></i></button>
    </div>
    <div class="mainImg">
      메인 홍보 이미지
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIntroArea",
  data: function() {
    return {
      searchText: ""
    };
  },
  methods: {
    /** 검색버튼
     *  1. 유효성 검사
     *  2. 검색어 api 조회
     *  3. 검색결과 shopList 컴포넌트에 적용
     */
    goSearch: function() {
      if (!this.searchText) {
        alert("검색어를 입력해주세요.");
        return;
      }
      // TODO : 검색어 API 조회
      this.$emit("setSearch", true);
    }
  }
};
</script>

<style></style>
