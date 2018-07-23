<template>
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
      type: 'biz'
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
    bizInfo() {
      return this.$store.state.bizInfo
    },
    baseInfo(){
      let groups = this.$store.state.bizInfo
      return this.$store.state.bizInfo
    }
  },
  mounted() {
    // let params = this.$route.params
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
