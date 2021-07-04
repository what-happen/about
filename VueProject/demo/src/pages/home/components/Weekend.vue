<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" 
            v-for="(item,index) in weekendList"
            :key="index"
            >   
            <div class="item-img-wrapper">
                <img :src="item.imgUrl" alt="" class="item-img">
            </div>
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
  name: 'HomeWeekend',
  props:{
      weekendList:Array
  }
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/mixins.scss';
.recommend-title{
    line-height: .8rem;
    text-indent: .2rem;
    background-color:#eee;
}
.item-img-wrapper{
    overflow: hidden;
    height:0;
    padding-bottom: 37.09%;
}
.item-info{
    padding:.1rem
}
.item-img{
    width: 100%;
}
.item-title{
    line-height:.54rem;
    font-size:.32rem;
    @include ellipsis
}
.item-desc{
    line-height:.4rem;
    color:#ccc;
     @include ellipsis
}
</style>
