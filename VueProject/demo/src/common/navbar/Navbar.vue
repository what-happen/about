<template>
    <div class="container">
        <ul class="navbar" @click="change" >
          <li class="active">全部</li>
          <li>待出行</li>
          <li>待支付</li>
          <li>退款单</li>
        </ul>
        <div class="contents">
          <component :is="msg"></component>
        </div>  
    </div>
</template>
<script>
import $ from 'jquery'
import CommonAll from './components/All.vue'
export default {
  name: 'CommonNavbar',
  components:{
    CommonAll
  },
  data(){
      return{
        msg:'CommonAll'
      }
  },
  methods:{
    change(e){
      this.msg="CommonAll";
      $(e.target).addClass("active").siblings().removeClass('active')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~../../assets/styles/varbibles.scss';
.container{
  background-color:#EDEFF2 ;
}
.contents{
  position: absolute;
  top:1.72rem;
  left:0;
  right:0;
  bottom:0;
  background-color: #EDEFF2;
}
.navbar{
  margin:0 .25rem;
  height:$headHeight;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex:1
}
.navbar li{
  width:20%;
  padding:.1rem;
  border-radius: .8rem;
  text-align: center;
  background-color: #fff;
}
.navbar .active{
  color:#2CD3DF;
  background-color:#BFF4F7;
  border-color:#2CD3DF ;
  font-weight: bold;
}
</style>
