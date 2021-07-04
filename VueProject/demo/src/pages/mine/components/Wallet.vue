<template>
<div class="wallet">
    <div class="bet"><i class="iconfont bag">&#xe606;</i>我的钱包</div>
    <div class="icons">
        <div
            class="icon">
                <dl>
                <dd>0.00</dd>
                <dt>账户余额</dt>
                </dl>
        </div>
        <div
            class="icon">
                <dl>
                <dd>0</dd>
                <dt>星券</dt>
                </dl>
        </div>
        <div
            class="icon">
                <dl>
                <dd>0<span class="my-unit">张</span></dd>
                <dt>银行卡</dt>
                </dl>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'MineWallet'
}
</script>
<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.wallet{
    margin-top:.2rem;
    background-color: #fff;
}
.bet{
    font-size:.3rem;
    height:.9rem;
    line-height: .9rem;
    border-bottom:1px solid #eee;
}
.bag{
    margin:0 .12rem;
    font-size:.5rem;
}
.icons{
    height:1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 .7rem;
    flex:1;
}
.icon{
    height:100%;
    padding: 0 .1rem;
}
.icon dl{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex:1;
    
}
dt{
    color: #888;
    font-size: .24rem;
}
.my-unit{
    display: inline-block;
    font-size: .12rem;
    transform: scale(0.7);
}
</style>
