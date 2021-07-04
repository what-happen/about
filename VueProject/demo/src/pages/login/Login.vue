<template>
<div>
    <login-header></login-header>
    <login-navbar></login-navbar>
    <login-footer></login-footer>
</div>
</template>
<script>
import LoginHeader from './components/Header.vue'
import LoginNavbar from './components/Navbar.vue'
import LoginFooter from './components/Footer.vue'
export default {
  name: 'login',
  components:{
     LoginHeader,
     LoginNavbar,
     LoginFooter
  }
}
</script>
<style lang="scss" scoped>

</style>
