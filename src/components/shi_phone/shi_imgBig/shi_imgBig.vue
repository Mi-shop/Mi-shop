<template>
  <div>
    <div class="shi_exposure" v-for="(item,index) in data" :key="item.product_id">
      <img v-if="item.title" :src="item.title.img_url" class="shi_titleImg"></img>
      <img class="shi_img_big" :src="item.img_url" alt="">
      <div class="shi_info_bgw">
          <div class="shi_l1">
            <div class="shi_name">{{item.product_name}}</div>
            <div class="shi_l1Right">
              <span class="shi_price">￥{{item.product_price}}起</span>
              <s>￥{{item.product_org_price}}</s>
            </div>
          </div>
          <div class="shi_l2">
            <div class="shi_brife">{{item.product_brief}}</div>
            <div class="shi_buy-btn">立即购买</div>
          </div>
        </div>
      <div class="shi_line"></div>
    </div>
  </div>  
</template>

<script>
export default {
  props:{
    data : Array
  }
}
</script>

<style lang="stylus" scoped>

.shi_exposure
  padding 0 7px
  .shi_titleImg
    width 100%
    height 79px
  .shi_img_big
    width 100%
    height 227px
  .shi_info_bgw
    background #fff
    padding 11px 14px
    font-size 16px
    .shi_l1
      height 22px
      display flex
      justify-content space-between
      align-items center
      .shi_l1Right
        .shi_price
          color #ea625b
          font-size 14px
          margin-right 5px
        s 
          font-size 12px
          color #aaa
    .shi_l2
      display flex
      justify-content space-between
      align-items center
      .shi_brife
        display inline-block
        font-size 12px
        color #888
      .shi_buy-btn
        width 104px 
        height 14px
        padding 9px 0
        background #ea625b
        color #fff
        border-radius 3px
        text-align center
        line-height 14px
        font-size 14px
</style>