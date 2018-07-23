<template>
  <div id="news" class="news">
    <div class="news-wrap">
      <h2>行业快讯</h2>
      <div class="news-detail">
        <ul>
          <li v-for="item in consultationIndex" @click="goDetail(item.id)" :id="item.id">
            <div class="title">{{item.title}}</div><div class="time">{{item.authorName}} • {{item.date | formatTime}}</div>
          </li>
          <!-- <li><div class="title">26家分店，1.23亿美金融资，堪称美国餐饮届的标杆</div><div class="time">1小时前</div></li>
          <li><div class="title">断崖式下跌，高端餐饮的路在哪里</div><div class="time">1小时前</div></li>
          <li><div class="title">除了加盟一个好品牌，你还需要做的事情竟然这么多</div><div class="time">1小时前</div></li>
          <li><div class="title">从拉面馆到米其林，他是怎么做到的</div><div class="time">1小时前</div></li>  -->
        </ul>
      </div>
      <div class="browse-more" @click="queryMore">浏览更多</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'news',
  props: ['consultationIndex'],
  data () {
    return {
    }
  },
  methods: {
    goDetail(id) {
      this.$store.dispatch('getArticleDetail',id)
      this.$router.push('/article/'+id)
    },
    queryMore(){
      this.$store.dispatch('getConsultationList',{isFirst:true,pageNum: 1})
      this.$store.state.type = "consultation"
      this.$router.push('/information')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
