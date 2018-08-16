<template>
  <div class="index">
      <div id="app-left" class="app-left">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in bannerList" v-if="banner.position=='1'">
              <img :src="banner.img" :alt="banner.info" :title="banner.info">
            </div>
          </div>
          <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->

          <img src="../assets/left.png" class="swiper-button-prev" @click="prev">
          <img src="../assets/right.png" class="swiper-button-next" @click="next">
        </div>
        <div class="small-banner">
          <div class="banner" v-for="(banner, index) in _bannerList" :id="banner.id" :class="index==1?'_banner':''" v-if="banner.position=='2'">
            <img :src="banner.img" :alt="banner.info" :title="banner.info">
            <div class="title">
              <p>{{banner.info}}</p>
            </div>
          </div>
        </div>
        <!-- 项目列表 -->
        <projectList :navIsFixed='navIsFixed' :projectList="projectList" :recommendSearchInfo="recommendSearchInfo"></projectList>
      </div>
      <div id="app-right" class="app-right">
        <!-- 加盟小程序 -->
        <miniProgram></miniProgram>
        <!-- 行业快讯 -->
        <news :consultationIndex="consultationIndex"></news>
        <!-- 热门项目 -->
        <hotProject :hotProjectList='hotProjectList'></hotProject>
      </div>
  </div>
</template>

<script>
import miniProgram from '../components/mini-program/mini-program.vue'
import news from '../components/news/news.vue'
import hotProject from '../components/hot-project/hot-project.vue'
import projectList from '../components/project-list/project-list.vue'
export default {
  name: 'index',
  components: {
    miniProgram,
    news,
    hotProject,
    projectList
  },
  data () {
    return {
      navIsFixed:false,
      title: 'srr',
      swiperOption: {
        autoplay: {
          delay:3000
        },
        initialSlide: 0,
        loop: true,
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        onSlideChangeEnd: swiper => {
          console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  },
  asyncData ({ store }) {
    return  store.dispatch('initList')
  },
  metaInfo() {
    const title = "环球加盟—真实可靠的创业项目品牌加盟服务!"
    return {
      title,
      meta: [{ vmid: 'description', name: 'description', content: "环球加盟网，专注于连锁加盟领域的品牌加盟服务，通过招商广告、整合传播、咨询策划、品牌宣传等服务模块，解决信息不对称问题的同时降低企业招商成本，帮助多个品牌与企业实现招商服务，让招商、投资变得简单!" },
            { vmid: 'keywords', name: 'keywords', content: "环球加盟，品牌加盟，投资创业，连锁加盟创业，加盟连锁网，加盟小吃店，创业项目投资" }]
    }
  },
  computed: {
    projectList() {
      return this.$store.state.projectList
    },
    bannerList() {
      let banner = this.$store.state.bannerList
      let bannerList = []
      banner.forEach(function(ele,index){
        if(ele.position == '1'){
          bannerList.push(ele)
        }
      })
      return bannerList
    },
    _bannerList() {
      let banner = this.$store.state.bannerList
      let bannerList = []
      banner.forEach(function(ele,index){
        if(ele.position == '2'){
          bannerList.push(ele)
        }
      })
      return bannerList
    },
    recommendSearchInfo() {
      return this.$store.state.recommendSearchInfo
    },
    consultationIndex() {
      return this.$store.state.consultationIndex
    },
    hotProjectList() {
      return this.$store.state.hotProjectList
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#project-list').offsetTop
      if (scrollTop > offsetTop) {
        this.navIsFixed = true
      } else {
        this.navIsFixed = false
      }
    },
    prev() {
      this.mySwiper.slidePrev()
    },
    next() {
      this.mySwiper.slideNext()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index{
  width:1200px;
  margin: 20px auto;
  height:auto;
  overflow: hidden;
}
  .swiper-container{
    width:800px;
    height:244px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    img{
      width:100%;
      height:100%;
    }
    .swiper-button-prev,.swiper-button-next{
      width:30px;
      height:43px;
    }
    .swiper-button-next{
      background-image: url(../assets/right.png);
    }
    .swiper-button-prev {
      background-image: url(../assets/left.png);
    }
  }
  .small-banner{
    margin: 15px 0;
    overflow:hidden;
    text-align:left;
    .banner{
      position: relative;
      width:256px;
      height:144px;
      float:left;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      img{
        width:100%;
      }
      .title{
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        font-size:16px;
        color:#fff;
        height:64px;
        background-color :rgba(0, 0, 0, 0.6);
        filter: alpha(opacity=60);
        p{
          width:190px;
          margin: 10px auto;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    ._banner{
      margin: 0 15px;
    }
  }
</style>
