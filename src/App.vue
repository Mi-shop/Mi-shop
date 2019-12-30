<template>
  <div id="app">
    <!-- <ShiPhone></ShiPhone> -->
    <!-- <Header></Header> -->
    <Category></Category>
  </div>
</template>

<script>
import ShiPhone from './components/shi_phone/shi_phone.vue'
import Header from './components/shi_header/shi_header'
import Category from './pages/shi_category/shi_category'
export default {
  components:{
    ShiPhone,
    Header,
    Category
  }
  
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%

</style>
