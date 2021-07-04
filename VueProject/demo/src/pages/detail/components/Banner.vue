<template>
<div>
    <div class="banner" @click="handleClick()">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_600x330_31a6b8d8.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">大连圣亚海洋世界</div>
            <div class="banner-number"><i class="iconfont banner-icon">&#xe629;</i>39</div>
        </div>
    </div>
    <common-fade>
        <common-gallary 
        :imgs="imgs" 
        v-show="showGallary"
        @close="handleGallaryClick"
        ></common-gallary>
    </common-fade>   
</div>
  
</template>
<script>
import CommonGallary from '../../../common/gallary/Gallary.vue'
import CommonFade from '../../../common/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  data(){
      return{
          showGallary:false,
          imgs:['http://img1.qunarzz.com/sight/p0/1410/15/6a279b233299ba4d1575e54d94a93429.jpg_r_800x800_3aa03d45.jpg','http://img1.qunarzz.com/sight/p0/1410/15/6a279b233299ba4d1575e54d94a93429.jpg_r_800x800_3aa03d45.jpg']
      }
  },
  methods:{
    handleClick(){
        this.showGallary=true;
    },
    handleGallaryClick(){
        this.showGallary=false;
    }
  },
  components:{
      CommonGallary,
      CommonFade
  }
}
</script>

<style lang="scss" scoped>
.banner{
    position: relative;
    overflow: hidden;
    height:0;
    padding-bottom: 55%;
}
.banner-img{
    width:100%;
}
.banner-info{
    display: flex;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    line-height: .6rem;
    color:#fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
}
.banner-title{
    flex:1;
    font-size:.32rem;
    padding:0 .2rem;
}
.banner-number{
    padding:0 .4rem;
    line-height: .32rem;
    height:.32rem;
    margin-top:.14rem;
    border-radius: .2rem;
    background-color: rgba(0,0,0,.8);
    font-size:.24rem;
}
.banner-icon{
    font-size:.24rem
}
</style>
