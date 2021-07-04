<template>
<div>
    <div class="container1">
        <div class="title" >
                <a href="#" class="actived" @click="msgLogin">短信验证码登录</a>
                <a href="#"  @click="acountLogin">账号登录</a>
        </div>
    </div>
    <div class="content">
          <component :is="msg"></component>
    </div>  
</div>
    
</template>
<script>
import $ from 'jquery'
import msgLogin from './msgLogin.vue'
import acountLogin from './acountLogin.vue'
export default {
  name: 'LoginNavbar',
  components:{
    msgLogin,
    acountLogin
  },
  data(){
      return{
        msg:'msgLogin'
      }
  },
  methods:{
    msgLogin(e){
      $(e.target).addClass("actived").siblings().removeClass('actived');
      this.msg=msgLogin
    },
    acountLogin(e){
      $(e.target).addClass("actived").siblings().removeClass('actived')
      this.msg=acountLogin
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.container1{
    background-color:#18A9B9;
    color: #fff;
    height: .9rem;
    padding: .1rem .2rem 0;
}
.title{
    display: flex;
    border:1px solid #fff;
    border-radius: .1rem;
    font-size:.14rem;
    justify-content: space-around;
    align-items: center;
    background: #18A9B9;
}
.title a{
    display: block;
    flex:1;
    padding: .15rem;
    color:#fff;
    font-size: .36rem;
    text-align: center;
}
a.actived{
    background-color: #fff;
    color:$bgColor;
}
.content{
    background-color: #F3F9FC;
    padding-top: .1rem;
    position: absolute;
    top:1.8rem;
    left:0;
    right: 0;
    bottom:0;
}
</style>
