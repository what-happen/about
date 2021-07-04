<template>
  <div ref="slide">
    <order-header @slideDown="show"></order-header>
    <order-banner></order-banner>
    <order-slide></order-slide>
  </div>
</template>
<script>
import $ from 'jquery'
import OrderHeader from './components/Header.vue'
import OrderBanner from './components/Banner.vue'
import OrderSlide from './components/Slide.vue'
export default {
  name: 'order',
  components:{
      OrderHeader,
      OrderBanner,
      OrderSlide
  },
  methods:{
    show(flag){
      if(!flag){
         $('#container').fadeIn()
        $('.arrow').css({
          'transform':'rotate(-90deg)'
        })
        $('.content').slideDown('slow');
      }else{
        $('.content').slideUp('slow');
        $('.arrow').css({
          'transform':'rotate(90deg)'
        })
         $('#container').fadeOut()
      }
      
      // $('#container').fadeToggle()
        //  this.flag=false
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
