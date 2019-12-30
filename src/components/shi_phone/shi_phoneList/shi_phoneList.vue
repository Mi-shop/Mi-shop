<template>
  <div class="phoneListContainer">
    <div class="shi_list">
      <div class="shi_exposure" v-for="(phone,index) in phoneList" :key="Date.now()+index">
        <img :src="phone.img_url" alt="">
        <div class="shi_content">
          <p class="shi_phoneName">{{phone.product_name}}</p>
          <p class="shi_desc">{{phone.product_brief}}</p>
          <div class="shi_price">
            <p>￥{{phone.product_price}}{{phone.show_price_qi?'起':''}}</p>
            <s>{{phone.product_org_price}}</s>
          </div>
          <div class="shi_buy_btn">{{phone.btn_txt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    phoneList:Array
  }

}
</script>

<style lang="stylus" scoped>
.phoneListContainer
  .shi_list
    width 97%
    display flex
    justify-content space-between
    flex-wrap wrap
    margin 0 auto
    .shi_exposure
      width 49%
      background #fff
      margin-bottom 5px
      img 
        width 100%
      .shi_content
        height 87px
        padding 10px 14px
        text-align center
        background #fff
        .shi_phoneName
          font-size 16px
          color #000
        .shi_desc
          line-height 15px
          font-size 12px
          color #888
        .shi_price
          p
            font-size 14px
            color #ea625b
          s 
            color #888
        .shi_buy_btn
          width 104px
          height 14px
          padding 8px 0
          background #ea625b
          color #fff
          margin 5px auto 0
          border-radius 5px
          line-height 14px
</style>