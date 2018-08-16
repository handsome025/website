<template>
  <div class="brand" id="brand">
      <img src="../assets/brand1.png" alt>
      <img src="../assets/brand2.png" alt>
      <img src="../assets/brand3.png" alt>
      <img src="../assets/brand4.png" alt>
      <img src="../assets/brand5.png" alt>
      <img src="../assets/brand6.png" alt>
      <img src="../assets/brand7.png" alt>
      <img src="../assets/brand8.png" alt>
  </div>
</template>

<script>
// import top from '../components/top.vue'
// import bottom from '../components/bottom.vue'
export default {
  name: 'service',
  data () {
    return {
    }
  },
  asyncData ({ store }) {
    return store.dispatch('hotLabsInit')
  },
  metaInfo() {
    const title = '环球加盟网-让招商、投资变得简单!'
    return {
        title,
        meta: [{ vmid: 'description', name: 'description', content: "专注于连锁加盟领域，月均保持17000次项目招商咨询服务，已有20万咨询注册用户，累计入驻7667 个品牌，联系电话：021-86157065，招商经理：+86  18106775771" },
              { vmid: 'keywords', name: 'keywords', content: "品牌加盟，品牌入驻，品牌服务" }]
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#brand{
  width:1200px;
  margin: 20px auto;
  height:auto;
  overflow: hidden;
}
</style>
