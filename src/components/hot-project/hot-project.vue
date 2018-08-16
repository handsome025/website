<template>
  <div id="hot-project" class="hot-project">
    <div class="hot-wrap">
      <h2>热门项目</h2>
      <div class="hot-detail">
        <div v-for="(item, index) in hotProjectList" :id="item.id" @click="goDetail(item.id)">

          <div v-if="index<2" class="_hot">
            <img :src="item.head" :alt="item.yjh || item.name" :title="item.name">
            <div class="number">NO.{{index+1}}</div>
            <div class="title">
              <p>{{item.name}} | {{item.yjh || ''}}</p>
            </div> 
          </div>

          <div class="hot" v-if="index>1 && index<10">
            <img :src="item.head" :alt="item.yjh || item.name" :title="item.name" class="product">
            <div class="number">{{index+1}}</div>
            <div class="detail">
              <div class="title"><strong>{{item.name}}</strong>&nbsp;<span></span>&nbsp;{{item.yjh || ''}}</div>
              <div class="time">{{item.data | formatTime}}</div>
            </div>
          </div>
        </div>
        <!-- <div class="_hot"><img src="../../assets/hot1.png" alt=""><div class="number">NO.1</div><div class="title"><p>阿麗斑鱼丨中国斑鱼火锅领航者中国斑鱼火锅领航者</p></div></div>
        <div class="_hot"><img src="../../assets/hot1.png" alt=""><div class="number">NO.2</div><div class="title"><p>阿麗斑鱼丨中国斑鱼火锅领航者中国斑鱼火锅领航者</p></div></div>
        <div class="hot" >
          <img src="../../assets/hot2.png" alt="" class="product">
          <div class="number">3</div>
          <div class="detail">
            <div class="title"><strong>阿麗斑鱼丨</strong>中国斑鱼火锅领航者中国斑鱼火锅领航者</div>
            <div class="time">12小时前</div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mini-program',
  props: ['hotProjectList'],
  data () {
    return {
    }
  },
  methods: {
    goDetail(id) {
      console.info(787878,id)
      this.$store.dispatch('getBizDetail',id)
      this.$router.push('/biz/'+id)
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
