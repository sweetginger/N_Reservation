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
        class="searchForm"
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <button class="search" @click="goSearch()">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="mainImg">
      <AgileSlider></AgileSlider>
    </div>
  </div>
</template>

<script>
import AgileSlider from "@/components/Slider/AgileSlider";

export default {
  name: "HomeIntroArea",
  components: {
    AgileSlider
  },
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

<style scoped>
.homeIntroArea {
  width: 100%;
  background-color: #fff;
  border: 1px solid #bbb;
  margin: auto;
  height: 495px;
}

.searchWrap {
  display: flex;
  padding: 5px 10px;
  height: 50px;
}

.searchForm {
  flex: 4 0 auto;
  margin-left: 5px;
}
.search {
  width: 50px;
  height: 100%;
  background: #00c73c;
}
.fa-search {
  font-size: 20px;
  color: #fff;
}
</style>
