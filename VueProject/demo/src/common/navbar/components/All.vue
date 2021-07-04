<template>
    <div class="container">
      <div class="login">
        <img class="img" src="https://s.qunarzz.com/q_design_font/images/empty.png" alt="">
        <div class="desc">你还没有本地订单</div>
        <div class="desc">快速登录查看在线订单吧~</div>
        <div class="btn">登录</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CommonAll'
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.img{
    width:100%;
}
.container{
  position: absolute;
  top:1.72rem;
  left:0;
  right:0;
  bottom:0;
  background-color: #EDEFF2;
}
.login{
  margin:1rem;
}
.desc{
  color: rgb(153, 153, 153);
  font-size:.28rem;
  margin:.1rem 0;
  text-align: center;
}
.btn{
    width:1.52rem;
    height:.7rem;
    border-radius: .4rem;
    color:#fff;
    background-color: #00bcd4;
    line-height: .7rem;
    text-align: center;
    margin:0 auto;
}
</style>
