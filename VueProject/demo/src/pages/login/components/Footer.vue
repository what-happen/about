<template>
<div class="container">
    <div class="footer">
        <div>电脑版</div>
        <div>关于我们</div>
    </div>
    <div class="copyright">Qunar 京ICP备05021087</div>
</div>
</template>
<script>
export default {
  name: 'LoginFooter'
}
</script>
<style lang="scss" scoped>
.footer{
    display: flex;
    color:#25a4bb;
    font-size: .26rem;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #ccc;
    padding: .1rem 0;
}
.footer div{
    flex:1;
    text-align: center;
}
.container{
    position: fixed;
    bottom:0;
    left:0;
    right: 0;
    z-index: 99;
}
 .copyright {color: #d4d9de;
    text-align: center;
    font-size: .12rem;
    padding: .1rem .1rem .2rem;}
</style>
