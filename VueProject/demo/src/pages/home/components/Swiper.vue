<template>
    <mt-swipe :auto="2000" v-if="showSwiper">
        <mt-swipe-item v-for="(item,index) in swiperList" :key="index"><img :src="item.imgUrl" alt=""></mt-swipe-item>
    </mt-swipe> 
</template>
<script>

export default {
  name: 'HomeSwiper',
  props:{
      swiperList:Array
  },
  computed:{
      showSwiper(){
          return this.swiperList.length
      }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
     height:4rem;
    }


</style>
