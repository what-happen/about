<template>
    <div id="container">
        <ul class="content">
            <li>全部</li>
            <li>机票</li>
            <li>酒店</li>
            <li>酒店住宿</li>
            <li>旅游度假团购</li>
            <li>火车票</li>
            <li>门票</li>
            <li>签证</li>
            <li>惠玩当地</li>
            <li>全球购</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'OrderSlide'
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
#container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    left:0;
    right:0;
    top:$headHeight;
    bottom:0;
    background-color: rgba(0,0,0,.7);
    z-index:99;
    display: none;
}
.content{
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.1rem 0.3rem;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    background-color: #EDEFF2;
}
.content li{
    width:30%;
    text-align: center;
    box-sizing: border-box;
    padding: 0.1rem 0;
    background-color: #fff;
    border-radius: 0.06rem;
    margin:.1rem 0;
}
</style>
