<template>
  <div class='phoneContainer'>
    <Swiper v-if="swiper.length>0" :swiper='swiper'></Swiper>
    <div class="shi_line"></div>
    <ImgBig v-if="imgBig.length>0" :data='imgBig'></ImgBig>
    <div class="shi_line"></div>
    <PhoneList v-if="phoneList.length>0" :phoneList='phoneList'></PhoneList>
    <div class="shi_line"></div>
    <ImgBig v-if="categoryPhone.length>0" :data='categoryPhone'></ImgBig>
    <div class="shi_line"></div>
    <PhoneList v-if="phoneList.length>0" :phoneList='phoneList'></PhoneList>
    <div class="shi_line"></div>
    <ImgBig v-if="categoryPhone.length>0" :data='categoryPhone'></ImgBig>
    <div class="shi_line"></div>
    <PhoneList v-if="phoneList.length>0" :phoneList='phoneList'></PhoneList>
  </div>
</template>

<script>
import {reqPhone} from '../../api';
import ImgBig from './shi_imgBig/shi_imgBig';
import Swiper from '../shi_swiper/shi_swiper';
import PhoneList from './shi_phoneList/shi_phoneList';
export default {
  data(){
    return{
      phone:[],
      swiper:[],
      imgBig:[],
      phoneList:[],
      categoryPhone:[]
    }
  },
  components:{
    ImgBig,
    Swiper,
    PhoneList
  },
  methods:{
    async getPhone(){
      const result = await reqPhone()
      let {code,phone} = result;
      if(code === 0){
        this.phone = phone.data
        this.swiper = phone.data.swiper
        this.imgBig = phone.data.img_big
        this.phoneList = phone.data.phoneList
        this.categoryPhone = phone.data.categoryPhone
      }
      
    }
  },
 
  mounted(){
    this.getPhone()
  }
  
}
</script>

<style lang="stylus" scoped>
.phoneContainer
  width 100%
  height 100%
  background #E6E7FB
  .shi_line
    width 100%
    height 5px
  </style>