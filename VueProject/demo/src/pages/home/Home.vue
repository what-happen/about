<template>
  <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :weekendList="weekendList"></home-weekend>
      <home-footer></home-footer>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
import HomeFooter from './components/Footer'
export default {
  name: 'home',
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      HomeFooter
  },
  data(){
      return{
          swiperList:[],
          recommendList:[],
          weekendList:[],
          lastCity:'',
          iconList: []
      }
  },
  computed:{
      ...mapState(['city'])
  },
  mounted(){
      this.lastCity=this.city;
      this.getHomeInfo()
  },
  activated(){
      if(this.city!==this.lastCity){
          this.lastCity=this.city;
          this.getHomeInfo()
      }
  },
  methods:{
     getHomeInfo() {
         axios.get('../../../static/mock/index.json?city='+this.city).then(this.getHomeInfoSucc)
     },
     getHomeInfoSucc(res){
         res=res.data
         if(res.ret&&res.data){
             this.swiperList=res.data.swiperList;
             this.recommendList=res.data.recommendList;
             this.weekendList=res.data.weekendList;
             this.iconList = res.data.iconList
         }
     }
     
  }
}
</script>

<style>

</style>
