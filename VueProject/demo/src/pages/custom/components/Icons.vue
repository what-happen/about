<template>
<div>
     <div class="icons">
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>机票问题</dt>
            </dl>
        </div>
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>酒店问题</dt>
            </dl>
        </div>
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>火车票问题</dt>
            </dl>
        </div>
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>门票问题</dt>
            </dl>
        </div>
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>度假问题</dt>
            </dl>
        </div>
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>用车问题</dt>
            </dl>
        </div>
        <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>账号问题</dt>
            </dl>
        </div>
         <div class="icon">
            <dl>
               <dd><img src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt=""></dd>
               <dt>其它</dt>
            </dl>
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: 'CustomIcon'
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
    .icons{
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        align-content: center;
        background-color: #fff;
        padding:.1rem
    }
    .icon{
        box-sizing: border-box;
        width:25%;
        padding: .05rem .4rem;
    }
    dd,dt{
        text-align: center;
        color:$darkTextColor;
        font-size: .24rem;
    }
    dd img{
        width:100%
    }
</style>
