<template>
  <section id="project-list" class="project-list">
    <div class="project-wrap">
      <div class="project-nav" :class="navIsFixed?'nav-fixed animated fadeInDown':''">
        <div class="nav-fixed-wrap">
          <a href="javascript:;"  :class="navIndex == 0 ? 'curr':''" @click="search('','',0)">全部</a>
          <a href="javascript:;" v-for="(item, index) in recommendSearchInfo"  :class="navIndex == index+1 ? 'curr':''" :title="item.value" :code="item.code" @click="search(item.code,item.value,index+1)">{{item.value}}</a>
          <div class="top-right">
            <div class="search-wrap">
              <input type="text" name="search" class="search" v-model="keys" placeholder="搜索您感兴趣的项目…">
              <img src="../../assets/search_btn.png" alt="" class="search-btn" @click="searchKey">
            </div>
            <img src="../../assets/Group.png" alt="" class="online">
          </div>
        </div>
      </div>
      <div class="list">
        <!-- <div class="list-detail">
          <div class="detail-left">
            <img src="../../assets/list.png">
            <div class="item _item"><p>餐饮餐饮</p></div>
          </div>
          <div class="detail-right">
            <div class="right-title">台湾一点点奶茶<div class="address">总部台湾</div></div>
            <div class="right-desc">一点点，点一段滋养的旋律</div>
            <div class="right-sum"><span class="sum-title">投资金额&nbsp;&nbsp;</span><strong class="sum">20~50万</strong></div>
            <div class="right-item">
              <label class="high">人气高</label><label class="hot">热门</label><label>低门槛</label>
            </div>
          </div>
        </div> -->

        <div v-for="(item, index) in projectList" class="list-detail" :id="item.id" @click="bizExDetail(item.id)">
          <div class="detail-left">
            <img :src="item.head" :alt="item.yjh || item.name" :title="item.name">
            <div class="item" v-if="item.hangYe" :class="item.hangYe.length > 2? '_item':''"><p>{{item.hangYe}}</p></div>
          </div>
          <div class="detail-right">
            <div class="right-title">{{item.name}}<div class="address">总部{{item.zongBu}}</div></div>
            <div class="right-desc">{{item.yjh}}</div>
            <div class="right-sum"><span class="sum-title">投资金额&nbsp;&nbsp;</span><strong class="sum">{{item.tzje}}</strong></div>
            <div class="right-item">
              <label v-for="label in item.lab" v-show="label" :class="[label=='热门'?'hot':'',label=='人气高'?'high':'']" >{{label}}</label>
            </div>
          </div>
        </div>

        <div class="browse-more" @click="queryMore">{{this.$store.state.moreProject ? '浏览更多':'无更多数据'}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import * as api from '../../service/api'
export default {
  name: 'project-list',
  props: ['navIsFixed','projectList','recommendSearchInfo'],
  data () {
    return {
      // navIndex: 0,
      nav: ['全部','餐饮','茶饮','教育','母婴儿童','汽车美容','美容护肤'],
      keys:'',
      itemCode:'',
      itemValue:''
    }
  },
  computed:{
    moreProject() {
      return this.$store.state.moreProject
    },
    navIndex(){
      return this.$store.state.navIndex
    }
  },
  methods: {
    async bizExDetail(id){
      this.$store.dispatch('getBizDetail', id)
      this.$router.push("/biz/"+id)
      // let search = await api.search({id:id})
    },
    search(code,value,index) {
      // this.$store.state.navIndex = index
      let data = [{code:code,value:value}]
      if(index == 0){
        data = []
      }
      this.itemCode = code
      this.itemValue = value
      if(this.keys.trim() && this.navIsFixed){
        data.push({code:'XIANGMUMINGCHEN',value:this.keys.trim()})
      }
      let _data = {
        pageNum: 1,
        isFirst:true,
        data: JSON.stringify(data)
      }
      this.$store.commit('setNavIndex',index)
      this.$store.dispatch('search', _data)
    },
    searchKey(){
      let data = []
      if(this.itemCode){
        data.push({code: this.itemCode,value:this.itemValue})
      }
      // let data = [{code: this.itemCode,value:this.itemValue}]
      if(this.keys.trim()){
        data.push({code:'XIANGMUMINGCHEN',value:this.keys.trim()})
      }
      let _data = {
        pageNum: 1,
        isFirst:true,
        data: JSON.stringify(data)
      }
      this.$store.dispatch('search', _data)
    },
    async queryMore(){
      let hasMore = this.$store.state.moreProject
      if(!hasMore)return
      let pageNum = ++ this.$store.state.projectPageNum
      let data = []
      if(this.itemCode){
        data.push({code: this.itemCode,value:this.itemValue})
      }
      if(this.keys.trim()){
        data.push({code:'XIANGMUMINGCHEN',value:this.keys.trim()})
      }
      
      let _data = {
        pageNum: pageNum,
        data: JSON.stringify(data)
      }

      // return 
      let search = await api.search(_data)
      let projectList = this.$store.state.projectList
      console.info(9999999,_data)
      console.info(988899,search)
      if(search.data){ 
        search.data.isFirst = false
        search.data.list = search.data.list.concat(this.$store.state.projectList)
        this.$store.dispatch('search', search)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
