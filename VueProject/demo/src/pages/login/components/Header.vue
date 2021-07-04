<template>
  <common-top>
        <router-link tag="div" to="/custom" class="header-left" slot="left"><div class="iconfont back-icon">&#xe624;</div></router-link>
        <div  class="header-input" slot="middle">登录</div>
        <div
        tag="div"
        class="header-right"
        slot="right">
            注册
        </div>
  </common-top>
</template>
<script>
import CommonTop from '../../../common/header/Top.vue'
export default {
  name: 'LoginHeader',
  components:{
      CommonTop
  },
  methods:{
      
  }
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.header{
    display:flex;
    height: $headHeight;
    background-color: #18A9B9
}
.header-left{
    width: 1.32rem;
    line-height:$headHeight;
    float:left
}
.back-icon{
    margin-left:.32rem;
    font-size: .4rem;
    color:#75ffff;
    font-weight: bolder;
}
.header-input{
    flex:1;
    height:$headHeight;
    line-height: $headHeight;
    text-align: center;
    font-size: .36rem;
    color:#fff;
}
.header-right{
    line-height:$headHeight;
    height:$headHeight;
    float:right;
    text-align: center;
    margin-right:.2rem;
    color:#75ffff;
    font-size: .32rem;
}
</style>
