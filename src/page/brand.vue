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
    const title = '环球加盟'
    return {
        title,
        meta: [{ vmid: 'description', name: 'description', content: title },
              { vmid: 'keywords', name: 'keywords', content: title }]
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
