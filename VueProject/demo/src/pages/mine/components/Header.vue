<template>
<div class="container">
    <router-link tag="div" to="/" class="header-top"><div class="iconfont back-icon">&#xe624;</div></router-link>
    <div class="header-down">
        <dl>
            <dd><img src="https://source.qunarzz.com/usercenter/touch/avatar.png" alt=""></dd>
            <dt>登录/注册</dt>
        </dl>
    </div>
</div>
</template>
<script>
export default {
  name: 'MineHeader'
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.container{
    background: url('../../../../static/images/mybgnew.jpg') no-repeat center;
    height:3.2rem;
}
.header-top{
    width: .64rem;
    line-height:$headHeight;
}
.back-icon{
    text-align: center;
    font-size: .4rem;
    font-weight:bold;
    color:#fff
}
.header-down{
    height:2rem;
    text-align: center;
}
.header-down img{
    width:1.3rem;
    height:1.3rem;
}
dt{
    margin-top:.1rem;
    color:#fff
}

</style>
