<template>
  <footer id="bottom" class="bottom">
    <div class="bottom-wrap">
      <div class="bottom-top">
        <div class="top-left">
          <h2>关于环球加盟</h2>
          <div>综合性招商信息发布平台，为创业<br/>者提供招商、代理、开店等精选商<br/>机，优选好项目，让创业更加轻松！</div>
        </div>
        <div class="top-center">
          <h2>联系我们</h2>
          <ul>
            <li>电话：+021-86157065</li>
            <li>项目合作：+86 181-0677-5771</li>
          </ul>
        </div>
        <div class="top-right">
          <h2>热门标签</h2>
          <div>
            <label v-for="item in hotLabs" :code='item.code' :title="item.name">{{item.name}}</label>
          </div>
        </div>
      </div>
      <div class="bottom-center"></div>
      <div class="bottom-bottom">
        <div class="bottom-logo">
          <img src="../../assets/logo.png" alt="环球加盟">
        </div>
        <div class="bottom-service">
          <div class="service">本站由&nbsp;&nbsp;<span>阿里云&nbsp;&nbsp;提供计算与安全服务</span></div>
          <div class="record">©2018~2020  上海炬啸网络科技有限公司 | 沪IPC号213123124455 | 沪IPC备号213123124455 | 沪公网安备号222333311113</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
let label = ['火锅','奶茶','麻辣烫','小饰品','家具','电器','火锅','奶茶','麻辣烫','小饰品','家具','电器','火锅','奶茶','麻辣烫','小饰品','家具','电器','火锅','奶茶','麻辣烫','小饰品','家具','电器']
export default {
  name: 'bottom',
  props:['hotLabs'],
  data () {
    return {
      label: label
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
