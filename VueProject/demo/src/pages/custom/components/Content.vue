<template>
<div>
     <div class="question">常见问题</div>
     <ul class="title">
        <li><i class="iconfont icon">&#xe606;</i>闪游卡</li>
        <li><i class="iconfont icon">&#xe606;</i>实名认证</li>
        <li><i class="iconfont icon">&#xe606;</i>返现金额如何提现</li>
        <li><i class="iconfont icon">&#xe606;</i>账户安全险问题</li>
        <li><i class="iconfont icon">&#xe606;</i>找不到订单</li>
        <li><i class="iconfont icon">&#xe606;</i>火车票退票手续费怎么算</li>
        <li><i class="iconfont icon">&#xe606;</i>到店无法入住</li>
     </ul>
     <section class="ms-login" style="display: block;">
        <p>点击登录，享受更多服务</p>
        <router-link tag="button" to="/login" class="yo-btn-normal" action-type="login">登录</router-link>
    </section>
</div>
</template>
<script>

export default {
  name: 'CustomContent'
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.title{
    background-color: #fff;
    border-radius: .1rem;
}
.title li{
    margin-left:.1rem;
    border-bottom:1px solid #eee;
    height:.88rem;
    line-height:.88rem
}
.question{
    margin-left:.1rem;
    height:1rem;
    line-height: 1rem;
}
.icon{
    margin-right:.1rem;
}
.ms-login{
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    padding: 0 .15rem .1rem;
    font-size: .12rem;
    text-align: center;
}
.ms-login p{
    color: #888;
    height: .38rem;
    line-height: .38rem;
    font-size: .12rem;
    text-align: left;
}
.yo-btn-normal{
    background-color: #fff;
    color: #1ba9ba;
    width: 100%;
    height: .74rem;
    line-height: .74rem;
    border: 0;
    border-radius: .1rem;
    font-size: .32rem;
    letter-spacing: .02rem;
}
</style>
