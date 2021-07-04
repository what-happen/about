<template>
<div class="custom">
    <custom-header></custom-header>
    <component :is="this.isShow&&'CustomIcons'" ></component>
    <component :is="this.isShow&&'CustomContent'" ></component>
    <component :is="!this.isShow&&'CustomOrder'" ></component>
</div>
</template>
<script>
import CustomHeader from './components/Header.vue'
import CustomIcons from './components/Icons.vue'
import CustomContent from './components/Content.vue'
import CustomOrder from './components/Order.vue'
import {mapState} from 'vuex'
export default {
  name: 'custom',
  components:{
      CustomHeader,
      CustomIcons,
      CustomContent,
      CustomOrder
  },
  computed:{
      ...mapState(['isShow'])
  },
  data(){
      return{
          msg:11
      }
  }
}
</script>
<style lang="scss" scoped>
.custom{
    height:100vh;
    background-color: #EBECED;
}
</style>
