<template>
<div class="tab">
   <div class="tab-item">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>我的订单</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
   <div class="tab-item">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>我的会员</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
   <div class="tab-item">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>我的退款</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
   <div class="tab-item">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>我的发票</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
   <div class="tab-item">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>我的攻略</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
   <div class="tab-item respons">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>意见反馈</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
   <div class="tab-item">
       <div><i class="iconfont bag">&#xe606;</i></div>
       <div class="tab-desc">
           <span>关于去哪儿网</span>
           <i class="iconfont to">&#xe624;</i>
       </div>
   </div>
</div>
</template>
<script>
export default {
  name: 'MineTab'
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.tab{
    margin-top:.2rem;
}
.bag{
    margin:0 .12rem;
    font-size:.5rem;
}
.tab-item{
    display: flex;
     justify-content: flex-start;
    align-items: center;
    font-size:.4rem;
    height:.9rem;
    line-height: .9rem;
    background-color: #fff;

}
.tab-desc{
    display: flex;
    justify-content: space-between;
    padding-right: .3rem;
    flex:1;
    border-bottom:1px solid #eee;
    font-size: .3rem;
}
.respons{
    margin-top:.2rem;
}
.to{
    transform: rotate(180deg);
    color: #c7c7cc;
    font-size: .24rem;
}
</style>
