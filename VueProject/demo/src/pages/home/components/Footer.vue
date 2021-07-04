<template>
  <div class="footer border-top">
        <div
        class="icon active">
            <dl>
               <dd><i  class="iconfont">&#xe606;</i></dd>
               <dt>首页</dt>
            </dl>
        </div>
        <router-link class="icon" tag="div" to="/order">
            <dl>
               <dd><i class="iconfont">&#xe663;</i></dd>
               <dt>订单</dt>
            </dl>
        </router-link>
        <router-link class="icon" tag="div" to="/custom">
            <dl>
               <dd><i class="iconfont">&#xe625;</i></dd>
               <dt>客服</dt>
            </dl>
        </router-link>
        <router-link class="icon" tag="div" to="/mine">
            <dl>
               <dd><i class="iconfont">&#xe63a;</i></dd>
               <dt>我的</dt>
            </dl>
        </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.footer{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height:1rem;
    display: flex;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    flex:1;
}
.icon{
    height:100%;
    padding: 0 .1rem;
}
.icon dl{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex:1
}
.active{
    color:$bgColor
}
</style>
