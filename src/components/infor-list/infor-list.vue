<template>
  <div id="infor-list" class="infor-list">
    <div class="project-wrap">
      <div class="list">
        <div class="list-detail" v-for="(item, index) in consultationList" :id="item.id" @click="articleDetail(item.id)">
          <div class="detail-left">
            <img :src="item.head" :title="item.title" :alt="item.abstractContent">
          </div>
          <div class="detail-right">
            <div class="right-title">{{item.title}}</div>
            <div class="right-desc">{{item.abstractContent}}</div>
            <div class="right-item">
              {{item.authorName}} • {{item.date | formatTime}}
              <label class="hot" v-if='item.hangYe'>{{item.hangYe}}</label>
            </div>
          </div>
        </div>
        <!-- <div class="list-detail">
          <div class="detail-left">
            <img src="../../assets/list.png">
          </div>
          <div class="detail-right">
            <div class="right-title">台湾一点点奶茶</div>
            <div class="right-desc">一点点，点一段滋养的旋律</div>
            <div class="right-item">
              环球加盟 • 12小时前
              <label class="hot">餐饮</label>
            </div>
          </div>
        </div>
        <div class="list-detail">
          <div class="detail-left">
            <img src="../../assets/list.png">
          </div>
          <div class="detail-right">
            <div class="right-title">台湾一点点奶茶</div>
            <div class="right-desc">一点点，点一段滋养的旋律</div>
            <div class="right-item">
              环球加盟 • 12小时前
              <label class="hot">餐饮</label>
            </div>
          </div>
        </div> -->
        <div class="browse-more" @click="queryMore">{{this.$store.state.moreConsultation ? '浏览更多':'无更多数据'}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'project-list',
  props:['consultationList'],
  data () {
    return {
      navIndex:0,
      nav:['全部','餐饮','茶饮','教育','母婴儿童','汽车美容','美容护肤','餐饮','茶饮','教育','母婴儿童','汽车美容','美容护肤']
    }
  },
  methods: {
    async articleDetail(id){
      this.$store.dispatch('getArticle', id)
      this.$router.push("/article/"+id)
      // let search = await api.search({id:id})
    },
    async queryMore() {
      let hasMore = this.$store.state.moreConsultation
      if(!hasMore)return
      let pageNum = ++ this.$store.state.consultationPageNum
      let _data = {
        pageNum: pageNum,
        isFirst: false
      }
      let consultationInfo = await api.getConsultationList(_data)
      let consultationList = this.$store.state.consultationList
      if(consultationInfo.data){
        consultationInfo.data.isFirst = false
        consultationInfo.data.list = consultationInfo.data.list.concat(this.$store.state.consultationList)
        this.$store.dispatch('getConsultationList', consultationInfo)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
