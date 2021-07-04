<template>
   <ul class="list" >
       <li class="item" 
       v-for="(item,key) of cities" 
       :key="key" 
       @click="handleClick"
       >{{key}}</li>

   </ul>
</template>
<script>

export default {
  name: 'CityAlphabet',
  props:{
      cities:Object
  },
  methods:{
      handleClick(e){
          this.$emit('change',e.target.innerText)
      }
  }
}
</script>

<style lang="scss" scoped>
@import '~../../../assets/styles/varbibles.scss';
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:.4rem;
    align-items: center;
    position: absolute;
    top:1.7rem;
    right:0;
    bottom: 0;
}
.item{
    line-height: .4rem;
    color:$bgColor;
}
</style>
