<!--
 * @Author: wn
 * @Date: 2021-09-12 11:37:21
 * @LastEditTime: 2021-09-12 11:38:45
 * @LastEditors: wn
 * @Description: 
-->
<template>
  <header class="shi_header">
    <i class="shi_goBack iconfont icon-arrow3"></i>
    <slot name="shi_title"></slot>
    <i class="shi_seacher iconfont icon-search"></i>
  </header>
</template>




<script>
export default {};
</script>

<style lang="stylus" scoped>
.shi_header {
  height: 50px;
  background: #f2f2f2;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .shi_goBack {
    font-size: 26px;
  }

  .shi_seacher {
    font-size: 26pxheight 50pxbackground #f2f2f2 color;
  }
}
</style>