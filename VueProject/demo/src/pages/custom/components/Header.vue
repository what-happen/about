<template>
<div>
    <common-top>
        <div  class="header-input" slot="middle">
            <div class="title">
                <a href="#" @click="orderClick">订单服务</a>
                <a href="#" class="actived" @click="productClick">产品咨询</a>
            </div>
        </div>
        <div 
        class="header-right"
        slot="right"
        @click="action">
            <i class="iconfont phone">&#xe625;</i>
        </div>
  </common-top>
    <div class="footer" v-show="foot" @click="action">
            <div class="content">
                <div class="on-top">
                    <p class="one">联系客服</p>
                    <p class="two"><i class="iconfont tell">&#xe625;</i>境内客服955117</p>
                </div>
                <div class="bottom">取消</div>
            </div>  
    </div>
</div>
</template>
<script>
import CommonTop from '../../../common/header/Top.vue'
import $  from 'jquery'
export default {
  name: 'CustomHeader',
  components:{
      CommonTop
  },
  data(){
      return{
            foot:false
      }
      
  },
  methods:{
      action(){
          this.foot=!this.foot;
      },
      productClick(e){
          $(e.target).addClass("actived").siblings().removeClass('actived');
          this.$store.dispatch('showWhich',true);
      },
      orderClick(e){
          $(e.target).addClass("actived").siblings().removeClass('actived');
           this.$store.dispatch('showWhich',false);
      }
  }
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.header{
    display:flex;
    height: $headHeight;
    background-color: $bgColor;
}
.header-input{
    height:$headHeight;
    line-height: $headHeight;
    text-align: center;
    flex:1;
    margin-left:1rem;
}
.title{
    display: flex;
    width: 4.12rem;
    margin: .1rem auto;
    line-height: .26rem;
    border:1px solid #fff;
    border-radius: .1rem;
    font-size:.14rem;
    justify-content: space-around;
    align-items: center;
}
.title a{
    display: block;
    flex:1;
    padding: .15rem;
    color:#fff;
}
.header-right{
    width:1rem;
    line-height:$headHeight;
    float:right;
    text-align: center;
    
}
a.actived{
    background-color: #fff;
    color:$bgColor;
}
.phone{
    color:#7ff
}
.footer{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background-color: rgba(0,0,0,.8);
    z-index:99;
}
.content{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    margin:.2rem;
}
.on-top{
    background-color: #fff;
    border-radius: .25rem;
}
.one{
    height: .88rem;
    line-height: .88rem;
    color: #9e9e9e;
    text-align: center;
    border-bottom:1px solid #eee
}
.two{
    height: .88rem;
    line-height: .88rem;
    margin-left:.3rem;
}
.tell{
    margin-right: .3rem;
}
.bottom{
    border-radius: .25rem;
    height: 1.12rem;
    line-height: 1.12rem;
    margin:.2rem 0;
    padding-left:.3rem;
    color: #00afc7;
    background-color: #fff;
    font-size: .4rem;
    text-align: center;
    font-family: Heiti SC Medium,Heiti SC Light,Helvetica Neue,Helvetica,STHeiTi,SourceHanSansCN-Medium,sans-serif;
}
</style>
