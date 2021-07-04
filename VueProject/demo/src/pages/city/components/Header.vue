<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
      城市详情
  </div>
</template>
<script>

export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.header{
    height: $headHeight;
    line-height: $headHeight;
    text-align: center;
    color:#fff;
    background-color: $bgColor;
    font-size: .32rem;
    position: relative;
}
.back-icon{
    width:.64rem;
    text-align: center;
    font-size: .4rem;
    position: absolute;
    left:0;
    top:0;
}
.iconfont{
  color:#fff;
}
</style>
