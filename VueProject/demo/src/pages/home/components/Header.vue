<template>
  <div class="header">
      <div  class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
      <div  class="header-input"><i class="iconfont">&#xe632;</i>输入城市/景点/游玩主题</div>
      <router-link to="/city">
          <div  class="header-right">{{this.city}}<i class="iconfont arrow-icon">&#xe64a;</i></div>
      </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
      ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.header{
    display:flex;
    height: $headHeight;
    background-color: $bgColor;
    color:#fff
}
.header-left{
    width: .64rem;
    line-height:$headHeight;
    float:left
}
.back-icon{
    text-align: center;
    font-size: .4rem;
}
.header-input{
    flex:1;
    margin-top:.12rem;
    margin-left:.2rem;
    height:.64rem;
    background-color: #fff;
    border-radius: .1rem;
    color:#ccc;
    line-height: .64rem;
    padding-left: .1rem;
}
.header-right{
    min-width:1.04rem;
    padding:0 .1rem;
    line-height:$headHeight;
    float:right;
    text-align: center;
    color:#fff;
}
.arrow-icon{
    font-size: .24rem;
}
        


    

    

</style>
