<template>
<div class="mine-container">
    <mine-header></mine-header>
    <mine-wallet></mine-wallet>
    <mine-tab></mine-tab>
</div>
</template>
<script>
import MineHeader from './components/Header.vue'
import MineWallet from './components/Wallet.vue'
import MineTab from './components/Tab.vue'
export default {
  name: 'mine',
  components:{
    MineHeader,
    MineWallet,
    MineTab
  }
}
</script>
<style lang="scss" scoped>
.mine-container{
  height:100vh;
  background-color: #EBECED;
}
</style>
