<template>
  <div class="container" @click="handleClick()">
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in imgs"
          :key="index"><img  class="gallaryImg" :src="item" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    handleClick(){
      this.$emit('close')
    }
  },
  data(){
    return{
      swiperOptions:{
        pagination:'.swiper-pagination',
        paginationType:'fraction',
        observeParents:true,
        observer:true
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container .swiper-container{
  overflow: inherit;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color: #000;
    z-index:99
}
.wrapper{
  height:0;
  width:100%;
  padding-bottom: 100%;
}
.mint-swipe{
     height:9rem;
    }
    .gallaryImg{
      width:100vw;
    }
    .swiper-pagination{
      color:#fff;
      bottom:-1rem;
    }
</style>
