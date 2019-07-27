<template>
<!--매장 소개 : 연주-->
    <div class="shopPicArea">
        <div class="shopPic">
            매장 사진 영역
        </div>
        <div class="shopInfo">
            매장 소개 글 영역
        </div>
    </div>
</template>

<script>
export default {
  name: "shopPicArea"
};
</script>

<style scoped>
    .shopPicArea{
        width:100%;
        height:100%;
        background-color:blueviolet;
    }
    .shopPic{
        float:left;
        width:50%;
        height:100px;
        background-color: blue;
    }
    .shopInfo{
        float:left;
        width:50%;
        height:100px;
        background-color: yellow;
    }
    
</style>
