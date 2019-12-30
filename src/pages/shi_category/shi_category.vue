<template>
  <div class="categoryContainer">
    <Header>
      <div class="shi_title" slot='shi_title'>分类</div>
    </Header>
    <div ref="wrap" class="shi_categoryListWrap" v-if="category.length>0">
      <ul class="shi_categoryMenu" ref="menu">
        <div ref="leftMenu">
          <li :class="currentIndex === index? 'shi_active':''" 
          v-if="category.length>0" 
          v-for="(item,index) in category" 
          :key="Date.now()+index"
          @click="clickMenu(index)"
          >
          {{item.category_name}}
          </li>
        </div>
      </ul>
      <div ref="list" class="shi_categoryList">
        <div ref="rightList" class="padding">
          <div v-for="(item,index) in category" :key='Date.now()+index'>
            <div v-for="(listItem,index) in item.category_list" :class="{'shi_group':listItem.view_type === 'category_group','shi_groupTitle':listItem.view_type === 'category_title'}">
              <span v-if='listItem.view_type === "category_title"' class="shi_listTitle">{{listItem.body.category_name}}</span>
              <div v-for="(list,index) in listItem.body.items" :key="Date.now()+index" :class="listItem.view_type === 'category_group'? 'shi_groupItem':''">
                <img v-if='listItem.view_type === "cells_auto_fill"&&list.img_url' class="shi_logoImg img" v-lazy="list.img_url.split('?')[0]" alt=""> 
                <div class="shi_phoneItem">
                  <img v-if='listItem.view_type === "category_group"&&list.img_url' class="shi_itemImg img" v-lazy="list.img_url" alt="">
                  <div v-if='listItem.view_type === "category_group"' class='shi_text'>{{list.product_name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Header from '../../components/shi_header/shi_header'
import {reqCategory} from '../../api'

export default {
  data(){
    return{
      category:[],
      tops:[],
      scrollY:0,
      currentIndex:0,
      liTop:0
    }
  },
  components:{
    Header
  },
  methods:{
    async getCategory(){
      let result = await reqCategory()
      let{code,category} = result;
      if(code===0){
        this.category = category.data;
      }
    },
    Index () {
      let {tops,scrollY} = this;
      let index = tops.findIndex((top,index)=>{
        //根据当前的scrollY判断在tops数组中的下标
        return scrollY >= top && scrollY < tops[index+1]
      })
      if(index !== this.index && this.leftScroll){
        this.index = index;
        //找到下标对应的菜单中的一项元素
        let item = this.$refs.leftMenu.children[index];

        //判断menu中高亮的li的top值是否超出边界
        if(Math.abs(item.offsetTop)>this.$refs.wrap.offsetHeight){
          this.liTop += item.offsetHeight
          this.leftScroll.scrollTo(0,-this.liTop)
        }
        // else if(Math.abs(item.offsetTop)<0){
        //   this.leftScroll.scrollTo(0,item.offsetTop)
        // }
      }
      this.currentIndex = index;
      
    },

    //初始化滚动条
    initScroll(){
      let that = this;
      console.log(this.category);
      
      if(!this.leftScroll){
        console.log('new scroll');
        
        //创建scroll对象
        this.leftScroll = new BScroll(this.$refs.menu, {
          click:true,
        })
        this.rightScroll = new BScroll(this.$refs.list, {
          // pullUpLoad: {
          //   threshold: 50
          // },
          click:true,
          probeType:2
        })
        // this.rightScroll.on('scroll',({y})=>{
        //   this.scrollY = Math.abs(y)
        // })
        this.rightScroll.on('scrollEnd',({y})=>{
          this.scrollY = Math.abs(y)
          that.Index()
        })
      }else{
          console.log('scroll刷新');
          
          this.leftScroll.refresh()
          this.rightScroll.refresh()
      }
    },
    //初始化右侧菜单的top值
    initTops(){
      const tops = [];
      let top = 0;
      tops.push(top)
      let items = Array.prototype.slice.call(this.$refs.rightList.children)
      items.forEach(item => {
        top += item.clientHeight
        tops.push(top)
      })
      this.tops = tops;
      console.log(this.tops);
      
    },
    clickMenu(index){
      if(index===this.currentIndex) return
      let top = this.tops[index]
      this.scrollY = top;
      this.rightScroll.scrollTo(0,-top)
    }
  },
  async mounted () {
    await this.getCategory();
    if(this.category.length>0){
        this.initScroll()
        this.initTops()
    }
    
  },
  created () {
    const that = this
    that.timer = setInterval(function () {
        console.log(document.readyState)
        if (document.readyState === 'complete') {
            that.initTops()
            window.clearInterval(that.timer)
        }
    }, 1000)
  }
}
  
</script>

<style lang="stylus" >
.categoryContainer
  width 100%
  height 100%
  overflow hidden
  position relative
  Header 
    position sticky
    top 0
  .shi_title
    font-size 20px
  .shi_categoryListWrap
    display flex
    height 95%
    .shi_categoryMenu
      width 20%
      border-right 1px solid #eee
      overflow hidden
      margin 10px 20px 10px 10px
      li
        // height 15%
        text-align center
        font-size 12px
        color #3c3c3c
        line-height 47px
        white-space: nowrap
        margin-right 10px
        overflow hidden
        &.shi_active
          font-size 16px
          color #fb7d34
    .shi_categoryList
      width 76%
      margin-right 20px
      overflow hidden
      .padding
        padding-bottom 450px
      .shi_groupTitle
        height 67px
        margin-top 10px
        line-height 67px
        .shi_listTitle
          font-size 15px
          display flex
          justify-content center
          align-items center
          &::before
            width:21px
            height:1px
            border:1px solid rgb(224, 224, 224)
            box-sizing:border-box
            content:""
            display:block
          &::after
            width:21px
            height:1px
            border:1px solid rgb(224, 224, 224)
            box-sizing:border-box
            content:""
            display:block
      .shi_group
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-between
        &::after
          content:''
          width 33.333%
          height 0px
        .shi_groupItem
          width 33.3333%
          margin 11px 0 16px 0
          .imgBig
            height 104px
      .shi_logoImg
        width 100%
      .shi_listTitle
        font-size 20px
        text-align center
      .shi_phoneItem
        width 100%
        text-align center
        .shi_itemImg 
          width 60%
          height 100%
        .shi_text
          width 90%
          font-size 12px
          color #777  
          margin-top 15px 
          white-space nowrap
          overflow hidden
      .occupant
        height 100%      
</style>