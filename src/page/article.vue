<template>
  <div class="information">
      <div id="app-left" class="app-left">
        <articleinfo :detailInfo="articleInfo" :type='type'></articleinfo>
      </div>
      <div id="project-list"></div>
      <div id="app-right" class="app-right">
       <!-- 行业快讯 -->
        <news :consultationIndex="consultationIndex"></news>
        <!-- 热门项目 -->
        <hotProject :hotProjectList='hotProjectList'></hotProject>
      </div>
     <!-- <div>{{$store.state.musicList}}</div>
    <router-link to="/detail">tiaozhua</router-link> -->
  </div>
</template>

<script>
import * as api from '../service/api'
import news from '../components/news/news.vue'
import hotProject from '../components/hot-project/hot-project.vue'
import articleinfo from '../components/article-info/article-info.vue'
import introduction from '../components/introduction/introduction.vue'
export default {
  name: 'article',
  components: {
    news,
    hotProject,
    articleinfo,
    introduction
  },
  data () {
    return {
      detailInfo: '',
      type: 'article'
    }
  },
  async asyncData ({store, route}) {
    // console.info(333333,route.params.id)
    return await store.dispatch('getArticle', route.params.id)
  },
  metaInfo() {
    const title = this.$store.state.articleInfo.title || '环球加盟'
    const description = this.$store.state.articleInfo.description || ''
    const keywords = this.$store.state.articleInfo.keyWord || ''
    return {
      title,
      meta: [{ vmid: 'description', name: 'description', content: description },
            { vmid: 'keywords', name: 'keywords', content: keywords }]
      }
  },
  computed: {
    consultationIndex() {
      return this.$store.state.consultationIndex
    },
    hotProjectList() {
      return this.$store.state.hotProjectList
    },
    articleInfo(){
      console.info()
      return this.$store.state.articleInfo
    }
  },
  mounted() {
    let params = this.$route.params

    // if(params.type == 'biz'){
    //   this.bizExDetail()
    // }else{
    //   this.articleDetail()
    // }
  },
  methods: {
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
</style>
