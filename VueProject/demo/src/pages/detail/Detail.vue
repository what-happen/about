<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content"><detail-list :list="list"></detail-list></div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'detail',
  components:{
      DetailBanner,
      DetailHeader,
      DetailList
  },
  data(){
    return{
      list:[{
        title:'成人票',
        children:[
          {
            title:'成人一票'
          },
          {
            title:'成人二票'
          }
          ]
      },
      {
        title:'学生票'
      },
      {
        title:'儿童票'
      }]
    }
  },
  methods:{
    getDetailInfo(){
      axios.get('../../../static/mock/detail.json',{params:{
        id:this.$route.params.id
      }}).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res){
       res=res.data
         if(res.ret&&res.data){
             this.swiperList=res.data.swiperList;
             this.recommendList=res.data.recommendList;
             this.weekendList=res.data.weekendList
         }
    }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
.content{
  height: 50rem;
}
</style>
