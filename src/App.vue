<template>
  <div id="app">
    <!-- 导航top -->
    <top :type='type'></top>
    <div class="app-wrap" id="app-wrap">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <!-- 底部bottom -->
    <bottom :hotLabs='hotLabs'></bottom>
  </div>
</template>
<script>
import top from './components/top/top.vue'
import bottom from './components/bottom/bottom.vue'
// import miniProgram from './components/mini-program/mini-program.vue'
// import news from './components/news/news.vue'
// import hotProject from './components/hot-project/hot-project.vue'
// import projectList from './components/project-list/project-list.vue'
// import inforList from './components/infor-list/infor-list.vue'
// import articleinfo from './components/article-info/article-info.vue'
// import introduction from './components/introduction/introduction.vue'
export default {
  name: 'app',
  components: {
    top,
    bottom
  },
  data(){
    return {
      navIsFixed:false
    }
  },
  computed: {
    hotLabs() {
      return this.$store.state.hotLabs
    },
    type() {
      return this.$store.state.type
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    // handleScroll () {
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   var offsetTop = document.querySelector('#app-wrap').offsetTop
    //   if (scrollTop > offsetTop) {
    //     this.navIsFixed = true
    //   } else {
    //     this.navIsFixed = false
    //   }
    // }
  }
}
</script>
<style>
@media only screen and (min-width: 320px) and (max-width: 820px){
  .app-wrap{
    padding: 0 20px;
  }
}
#app {
  min-width:1200px;
  font-family: 'PingFangSC-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  -webkit-user-select: text
}
.app-wrap{
  width:1200px;
  margin: 20px auto;
  height:auto;
  overflow: hidden;
}
#app-right{
  width: 312px;
  float:right;
}
#app-left{
  width: 800px;
  float:left;
}
</style>
