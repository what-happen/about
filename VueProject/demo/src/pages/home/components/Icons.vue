<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
            class="icon"
            v-for="item of page"
            :key="item.id"
            >
            <dl>
               <dd><img :src="item.imgUrl" alt="" class='icon-img-content'></dd>
               <dt class="icon-desc">{{item.desc}}</dt>
            </dl>
        </div>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>

export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
         scrollbar: '.swiper-scrollbar',
         scrollbarHide:false
      }
    }
  },
  computed:{
      pages () {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      });
      return pages;
  }
}
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
    .swiper-slide{
        display: flex;
        flex-wrap:wrap;
        justify-content: flex-start;
        align-content: center;
    }
    .icon{
        box-sizing: border-box;
        width:25%;
        padding:.1rem .2rem;
    }
    .icon-img-content{
        width:100%;
    }
    dd,dt{
        text-align: center;
        color:$darkTextColor
    }
.swiper-container-horizontal > .swiper-scrollbar {
    left: 50%;
    width: 2rem;
    bottom:0;
    transform: translateX(-50%);
}
</style>
