<template>
<div>
    <router-link tag="div" to="/" 
    class="header-abs"
    v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
      <router-link to="/">
          <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
</div>
  
</template>
<script>
export default {
  name: 'DetailHeader',
  data(){
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      const top=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
      if(top>50){
        let opacity=top/140;
        opacity=opacity>1?1:opacity;
        this.opacityStyle={opacity}
        this.showAbs=false
      }else{
        this.showAbs=true
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed(){
    //当前页面隐藏的时候解绑全局事件
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.header-abs{
    position: absolute;
    left:.2rem;
    top:.2rem;
    width:.8rem;
    height:.8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background-color: rgba(0,0,0,0.8);
}
.header-abs-back{
  color:#fff;
  font-size:.4rem
}
.header-fixed{
    height: $headHeight;
    line-height: $headHeight;
    text-align: center;
    color:#fff;
    background-color: $bgColor;
    font-size: .32rem;
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: 2;
}
.back-icon{
    width:.64rem;
    text-align: center;
    font-size: .4rem;
    position: absolute;
    left:0;
    top:0;
    color:#fff
}
</style>
