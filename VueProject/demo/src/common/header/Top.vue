<template>
  <div class="header">
      <slot  class="header-left" name="left"></slot>
      <slot  class="header-input" name="middle"></slot>
      <slot  class="header-right" name="right"></slot>
  </div>
</template>
<script>
export default {
  name: 'CommonTop'
}
</script>

<style lang="scss" scoped>

</style>
