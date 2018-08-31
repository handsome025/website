<template>
  <div>
    <div class="information">
        <div id="app-left" class="app-left">
          <articleinfo :detailInfo="bizInfo" :bizInfo="bizInfo" :type='type'></articleinfo>
        </div>
        <div id="project-list"></div>
        <div id="app-right" class="app-right">
          <!--  -->
          <introduction :baseInfo="baseInfo"></introduction>
         <!-- 行业快讯 -->
          <news :consultationIndex="consultationIndex"></news>
          <!-- 热门项目 -->
          <hotProject :hotProjectList='hotProjectList'></hotProject>
        </div>
       <!-- <div>{{$store.state.musicList}}</div>
      <router-link to="/detail">tiaozhua</router-link> -->
    </div>
    <div class="fixed-touch" ref='touch'>
      <div class="touch-wrap">
        <div class="touch-left">
          <div class="name">{{name}}<span>官方</span></div>
          <div class="detail">为中小创业者提供优质服务，携手共启财富之门</div>
        </div>
        <div class="touch-right">
          <div class="touch-desc">官方顾问<br>立即咨询</div>
          <div class="touch-input">
            <input type="tel" name="" maxlength="11" class="phone" placeholder="请输入您的手机号" v-model="phone">
            <input type="button" class="btn-touch" value="立即咨询" @click="addConnection">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../service/api'
import news from '../components/news/news.vue'
import hotProject from '../components/hot-project/hot-project.vue'
import articleinfo from '../components/article-info/article-info.vue'
import introduction from '../components/introduction/introduction.vue'
export default {
  name: 'biz',
  components: {
    news,
    hotProject,
    articleinfo,
    introduction
  },
  data () {
    return {
      detailInfo: '',
      type: 'biz',
      phone:''
    }
  },
  asyncData ({ store,route }) {
    // console.info(555555,route.params.id)
    return store.dispatch('getBiz',route.params.id)
  },
  metaInfo() {
    const title = this.$store.state.bizInfo.name || "环球加盟"
    const description = this.$store.state.bizInfo.description || ''
    const keywords = this.$store.state.bizInfo.keyWord || ''
    return {
      title,
      meta: [{ vmid: 'keywords', name: 'keywords', content: keywords },{ vmid: 'description', name: 'description', content: description }]
      }
  },
  computed: {
    consultationIndex() {
      return this.$store.state.consultationIndex
    },
    hotProjectList() {
      return this.$store.state.hotProjectList
    },
    bizInfo() {
      return this.$store.state.bizInfo
    },
    baseInfo(){
      let groups = this.$store.state.bizInfo
      return this.$store.state.bizInfo
    },
    name(){
      let groups = this.$store.state.bizInfo
      return groups.name
    }
  },
  mounted() {
    // let params = this.$route.params
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight
      if(scrollTop + windowHeight > scrollHeight - 305){
        //写后台加载数据的函数
        console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight)
        this.$refs.touch.style.position = "initial"
      }else{
        this.$refs.touch.style.position = "fixed"
      } 
    },
    async addConnection(){
      var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if(!mobile.test(this.phone.trim())){
        alert("请输入正确手机号！")
        return
      }
      let params = this.$route.params
      let connection = await api.addConnection({bizExId:params.id,phone:this.phone.trim()})
      if(connection.code == 0){
        alert("提交手机号成功！")
      }
    },
    async bizExDetail() {
      let params = this.$route.params
      let search = await api.bizExDetail({id:params.id})
      this.type = 'biz'
    },
    async articleDetail(){
      let params = this.$route.params
      let info = await api.consultationDetail({id:params.id})
      this.detailInfo = info.data
      this.type = 'article'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-right{
    margin-top: 20px;
  }
  .information{
    width:1200px;
    margin: 20px auto;
    height:auto;
    overflow: hidden;
  }
  .fixed-touch{
  position: fixed;
  height: 90px;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #1C1F23;
  .touch-wrap{
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    display: table;
    .touch-left{
      display: table-cell;
      vertical-align: middle;
      width: 670px;
      color: #fff;
      text-align: left;
      .name{
        font-size: 24px;
        span{
          display: inline-block;
          font-size: 12px;
          color: #fff;
          padding: 2px 10px;
          margin-left: 15px;
            vertical-align: middle;
          background-image: linear-gradient(-90deg, #E7C9A5 0%, #A37745 100%);
          border-radius: 4px;
        }
      }
      .detail{
        font-size: 14px;
      }
    }
    .touch-right{
      text-align: left;
      display: table-cell;
      vertical-align: middle;
      width: 520px;
      .touch-desc{
        color: #E1C29D;
        font-size: 18px;
        float: left;
      }
      .touch-input{
        position: relative;
        float: left;
        width: 400px;
        height: 54px;
        margin-left: 30px;
        .phone{
            height: 52px;
            padding: 0 30px 0 30px;
            width: 215px;
            font-size: 14px;
            background: #F6F6F6;
            border: 1px solid #EBEBEB;
            border-radius: 2px;
            color: #999;
            outline: none;
            border-radius: 100px 0 0 100px;
        }
        .btn-touch{
          display: inline-block;
          position: absolute;
          cursor: pointer;
          right: 0;
          top: 0;
          width: 140px;
          height: 54px;
          line-height: 54px;
          color: #fff;
          text-align: center;
          background-image: linear-gradient(-180deg, #E7C9A5 2%, #A37745 99%);
          border-radius: 0 100px 100px 0;
        }
      }
    }
  }
}
</style>
