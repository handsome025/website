<template>
  <div class="information">
      <div id="app-left" class="app-left">
        <articleInfo :detailInfo="detailInfo" :type='type'></articleInfo>
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
import articleInfo from '../components/article-info/article-info.vue'
import introduction from '../components/introduction/introduction.vue'
export default {
  name: 'information',
  components: {
    news,
    hotProject,
    articleInfo,
    introduction
  },
  data () {
    return {
      detailInfo: '',
      type: ''
    }
  },
  asyncData ({ store }) {
    // return store.dispatch('getDetail')
  },
  metaInfo() {
    const title = "环球加盟"
    return {
      title,
      meta: [{ vmid: 'description', name: 'description', content: title },
            { vmid: 'keywords', name: 'keywords', content: title }]
      }
  },
  computed: {
    consultationIndex() {
      return this.$store.state.consultationIndex
    },
    hotProjectList() {
      return this.$store.state.hotProjectList
    },
  },
  mounted() {
    let params = this.$route.params

    if(params.type == 'biz'){
      this.bizExDetail()
    }else{
      this.articleDetail()
    }
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
</style>
