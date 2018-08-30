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
    <bottom :hotLabs='hotLabs' :friendShipLink="friendShipLink"></bottom>
  </div>
</template>
<script>
import top from './components/top/top.vue'
import bottom from './components/bottom/bottom.vue'

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
  mounted () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e6e72860f61b61779ad786450c92d07f";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  },
  computed: {
    hotLabs() {
      return this.$store.state.hotLabs
    },
    type() {
      return this.$store.state.type
    },
    friendShipLink(){
     return this.$store.state.friendShipLink
    }
  },
  watch: {
    '$route' (to, from) {
      if (window._hmt) {
        // console.log(window._hmt)
        window._hmt.push(['_trackPageview', to.fullPath])
      }
    }
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
  position:relative;
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
