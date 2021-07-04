<template>
  <common-top>
        <router-link tag="div" to="/" class="header-left" slot="left"><div class="iconfont back-icon">&#xe624;</div></router-link>
        <div  class="header-input" slot="middle" @click="slideDown()">全部订单<i class="iconfont arrow">&#xe624;</i></div>
        <div 
        class="header-right"
        slot="right">
            手机查单
        </div>
  </common-top>
</template>
<script>

import CommonTop from '../../../common/header/Top.vue'
export default {
  name: 'OrderHeader',
  components:{
      CommonTop
  },
  data(){
      return{
          flag:false
      }
  },
  methods:{
      slideDown(){
          this.$emit('slideDown',this.flag);
          this.flag=!this.flag;
      }
  }
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.header{
    display:flex;
    height: $headHeight;
    background-color: #EDEFF2;
}
.header-left{
    width: 1.32rem;
    line-height:$headHeight;
    float:left
}
.back-icon{
    margin-left:.32rem;
    font-size: .4rem;
}
.header-input{
    flex:1;
    height:$headHeight;
    line-height: $headHeight;
    text-align: center;
}
.header-right{
    line-height:$headHeight;
    height:$headHeight;
    float:right;
    text-align: center;
    margin-right:.2rem;
}
.arrow{
    display: inline-block;
    transform: rotate(90deg);
    font-size: .24rem;
}
</style>
