<template>
    <header class="top" id="top">
      <div class="wrap-top">
        <div class="top-left"><img src="../../assets/logo.png" class="logo" alt="环球加盟"></div>
        <ul class="top-center">
          <!-- @click="routerLink(menu.path)" -->
          <li v-for="menu of menus" :class="isActive(menu.path) ? 'active' : '' " :title="menu.name" @click="changeNav(menu.path)">
            <router-link :to="menu.path">{{menu.name}}</router-link>
          </li>
        </ul>
        <div class="top-right">
          <div class="search-wrap" v-if='type'>
            <input type="text" name="search" class="search" v-model="keys" :placeholder="type=='index'?'搜索您感兴趣的项目…':'搜索您感兴趣的资讯…'" >
            <img src="../../assets/search_btn.png" alt="" class="search-btn" @click="search">
          </div>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2122183823&site=qq&menu=yes">
            <img src="../../assets/Group.png?p=2::51" alt="点击这里给我发消息" title="点击这里给我发消息" class="online">
            <!-- <img border="0" src="http://wpa.qq.com/pa?p=2:476956436:52" alt="点击这里给我发消息" title="点击这里给我发消息"/> -->
            </a>
        </div>
      </div>
    </header>
</template>
<script>
  export default {
    name: 'top',
    props:['type'],
    data () {
      return {
        menus: [
          { path: '/', name: '首页'},
          { path: '/information', name: '资讯'},
          { path: '/brand', name: '品牌入驻'},
          { path: '/contact', name: '联系我们'}
        ],
        keys: ''
      }
    },
    methods: {
      changeNav(path){
        console.info(path)
        if(path == '/'){
          this.$store.commit('setType',"index")
        }else if(path == '/information'){
          this.$store.dispatch('getConsultationList',{isFirst:true,pageNum: 1})
          this.$store.commit('setType',"consultation")
        }else{
          this.$store.commit('setType',"")
        }
      },
      isActive(route) {
        return route === this.$route.path || route === this.$route.fullPath
      },
      search() {
        if(!this.keys.trim())return
          if(this.$store.state.type == 'index'){
            let data = []
            data.push({code:'XIANGMUMINGCHEN',value:this.keys.trim()})
            let _data = {
              pageNum: 1,
              isFirst:true,
              data: JSON.stringify(data)
            }
            this.$store.dispatch('search', _data)
            this.$store.commit('setNavIndex',0)
          }
          if(this.$store.state.type=='consultation'){
            let _data = {
              pageNum: 1,
              content: this.keys.trim()
            }
            this.$store.dispatch('getConsultationSearch', _data)
          }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import './styles.less';
</style>
