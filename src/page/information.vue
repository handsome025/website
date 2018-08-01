<template>
  <div class="information">
      <div id="app-left" class="app-left">
        <!-- 资讯列表 -->
        <div id='project-list'></div>
        <inforList :consultationList="consultationList"></inforList>
      </div>
      <div id="app-right" class="app-right">
        <!-- 行业快讯 -->
        <news :consultationIndex="consultationPages"></news>
        <!-- 热门项目 -->
        <hotProject :hotProjectList='hotProjectList'></hotProject>
      </div>
  </div>
</template>

<script>
import news from '../components/news/news.vue'
import hotProject from '../components/hot-project/hot-project.vue'
import inforList from '../components/infor-list/infor-list.vue'
export default {
  name: 'information',
  components: {
    news,
    hotProject,
    inforList
  },
  data () {
    return {
      title: 'srr',
    }
  },
  asyncData ({ store }) {
    return store.dispatch('getConsultationList',{isFirst:true,pageNum: 1})
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
    consultationList() {
      return this.$store.state.consultationList
    },
    // consultationIndex() {
    //   return this.$store.state.consultationIndex
    // },
    recommendSearchInfo() {
      return this.$store.state.recommendSearchInfo
    },
    hotProjectList() {
      return this.$store.state.hotProjectList
    },
    consultationPages() {
      return this.$store.state.consultationPages
    },
  },
  mounted() {

  },
  methods: {
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
