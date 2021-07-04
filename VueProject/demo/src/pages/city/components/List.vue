<template>
  <div class="list" ref="wrapper">
      <div>
            <div class="area">
                <div class="title ">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            {{this.city}}
                        </div>
                    </div>
                </div>
            </div>
                <div class="area">
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper" 
                        v-for="(item,index) in hotCities" 
                        :key="index"
                        @click="handleCityClick(item.name)"
                        >
                            <div class="button">
                                {{item.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="area" v-for="(item,key) of cities"
                :key="key"
                :ref="key">
                    <div class="title border-topbottom">{{key}}</div>
                    <div class="item-list">
                        <div class="item border-bottom" v-for="innerItem of  item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                        >{{innerItem.name}}</div>
                    </div>
                </div>
      </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props:{
      hotCities:Array,
      cities:Object,
      letter:String
  },
  methods:{
      handleCityClick(city){
        //   this.$store.dispatch('changeCity',city);
          this.changeCity(city)
          this.$router.push('/')
      },
      ...mapMutations(['changeCity'])

  },
  watch:{
      letter(){
          if(this.letter){
              const element=this.$refs[this.letter][0]
              this.scroll.scrollToElement(element)
          }
      }
  },
  computed:{
      ...mapState(['city'])
  },
  updated(){
      this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.list{
    position: absolute;
    overflow: hidden;
    top:1.8rem;
    left:0;
    right:0;
    bottom:0;
}
.title{
    line-height:.54rem;
    background-color: #eee;
    padding-left:.2rem;
    color:#666;
    font-size:.26rem;
}
.border-topbottom::before,.border-topbottom::after,.border-bottom::before,.border-bottom::after{
    border-color: #ccc;
}
.button-list{
    padding:.1rem .6rem .1rem .1rem;
    overflow: hidden;
}
.button-wrapper{
    float:left;
    width:33.33%
}
.button{
    padding:.1rem ;
    margin:.1rem;
    text-align: center;
    border:.02rem solid #ccc;
    border-radius: .06rem;
}
.item{
    line-height: .76rem;
    padding-left: .2rem;
}
</style>
