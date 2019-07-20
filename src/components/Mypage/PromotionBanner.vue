<template>
<!--사이트 메인 : 연주-->
    <div class="promotionArea">
        <div class="banner big">배너1</div>
        <div class="banner right">
            <div class="banner">배너2</div>
            <div class="banner">배너3</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"promotionArea"
}
</script>

<style scoped>
    .promotionArea{
        width:100%;
        height:300px;
    }
    .promotionArea > div{
        float:left;
        width:50%;
    }

    .banner{
        height:150px;
        background-color: #fff;
        border:1px solid #494949;
        box-sizing:border-box;
    }
    .banner.big{
        height:300px;
    }
</style>
