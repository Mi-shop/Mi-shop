<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <img class="swiper-slide" :src="item.img_url" v-for="(item,index) in swiper" :key="item.material_id" alt="">
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
  props:{
    swiper:Array
  },
  mounted(){
    this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
  }
}
</script>

<style lang="stylus" scoped>

/deep/.swiper-pagination-bullet-active 
  background-color: rgba(255,255,255,.7)

</style>