<template>
    <div class="container">
      <div class="content">
        <img class="img" src="https://s.qunarzz.com/complain/images/wudingdan.png" alt="">
        <div class="desc">你还没有登录哦</div>
        <div class="desc">点击登录，享受订单操作、问题咨询、投诉反馈等服务~</div>
        <router-link class="btn" to="/login" tag="div">登录</router-link>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CustomOrder'
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.img{
    width: 2.76rem;
    height: 1.56rem;
    margin-bottom: .4rem;
}
.container{
  position: absolute;
  top:.86rem;
  left:0;
  right:0;
  bottom:0;
  background-color: #EDEFF2;
}
.content{
  margin:1rem;
  text-align: center;
}
.desc{
  color: rgb(153, 153, 153);
  font-size:.28rem;
  margin:.1rem 0;
  text-align: center;
}
.btn{
    width:2.7rem;
    height:.72rem;
    border-radius: .1rem;
    color:#00bcd4;
    border:1px solid #00bcd4;
    line-height: .72rem;
    text-align: center;
    margin:.4rem auto;
}
</style>
