<template>
  <div class="hello">
    <div style="line-height: 145px;">功能暂未开放！</div>
  </div>
</template>

<script>
// import top from '../components/top.vue'
// import bottom from '../components/bottom.vue'
export default {
  name: 'contact',
  data () {
    return {
      myTitle: 'srr'
    }
  },
  // components: {
  //   top: top,
  //   bottom: bottom
  // },
  asyncData ({ store }) {
  },
  metaInfo() {
    const title = '环球加盟'
    return {
        title,
        meta: [{ vmid: 'description', name: 'description', content: title },
              { vmid: 'keywords', name: 'keywords', content: title }]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
  min-height:476px;
}
</style>
