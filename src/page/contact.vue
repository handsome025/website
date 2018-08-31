<template>
  <div class="contact-wrap">
    <img src="../assets/touch_top.png" class="touch_top">
    <div class="contact" id="contact">
      <div class="touch-us">联系我们</div>
      <h1 class="title">上海总部</h1>
      <div>
        <ul>
          <li>
            <img src="../assets/company.png">
            <div class="name">公司名称</div>
            <div class="desc">上海炬啸网络科技有限公司</div>
          </li>
          <li class="margin-lr">
            <img src="../assets/address1.png">
            <div class="name">公司地址</div>
            <div class="desc">上海市徐汇区飞雕国际大厦1109</div>
          </li>
          <li>
            <img src="../assets/code.png">
            <div class="name">邮编</div>
            <div class="desc">200030</div>
          </li>
          <li>
            <img src="../assets/phone.png">
            <div class="name">公司总机</div>
            <div class="desc">+021-86157065</div>
          </li>
          <li class="margin-lr">
            <img src="../assets/tel.png">
            <div class="name">销售热线</div>
            <div class="desc">+86 181-0677-5771</div>
          </li>
          <li>
            <img src="../assets/line.png">
            <div class="name">公交路线</div>
            <div class="desc">乘坐地铁1、9、11号线到徐家汇站，从11号口出3分钟步行到飞雕国际大厦</div>
          </li>
        </ul>
      </div>
      <div>
        <img src="../assets/map.png">  
      </div>
      <div class="legal">
        <h1 class="title">法律声明</h1>
        <div class="legal-item">
          <div class="item-num"><span>NO.1</span></div>
          <div class="item-desc"><span>鉴于环球加盟网作为一种传播媒介，其中链接的相关广 告信息，均由广告主自行提供。环球加盟网对此等信息的准确性、完整性、合法性或真实性均不承担任何责任。此外，环球加盟网对任何使用或提供本网站信息的商业活动及其风险不承担任何责任，不保证每一广告中商业机会的收益或每一产品的质量或每一商业模式的营利。您需要对使用环球加盟网提供的服务结果自行承担风险。</span></div>
        </div>
        <div class="legal-item">
          <div class="item-num"><span>NO.2</span></div>
          <div class="item-desc"><span>环球加盟网不做任何形式的保证：不保证服务一定满足您的要求，不保证服务不中断，不保证交易结果的安全性、正确性、及时性、合法性（但上述情况可以通过环球加盟网相关规则进行相应处理）。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用环球加盟网服务，环球加盟网不承担任何法律责任。</span></div>
        </div>
        <div class="legal-item">
          <div class="item-num"><span>NO.3</span></div>
          <div class="item-desc"><span>环球加盟网尊重并保护所有使用环球加盟网用户的个人隐私权，您的个人资料，非经您亲自许可或根据相关法律、法规的强制性规定，环球加盟网不会主动地泄露给第三方（因政府执法部门、国家司法部门要求除外）。任何由于黑客政击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力而造成的个人资料泄露、丢失、被盗用或被篡改等，本网站亦不负任何责任。</span></div>
        </div>
        <div class="legal-item">
          <div class="item-num"><span>NO.4</span></div>
          <div class="item-desc"><span>环球加盟网转载作品（包括论坛内容）出于传递更多信息之目的，并不意味环球加盟网赞同其观点或证实其内容的真实性。如其他媒体、网站或个人转载使用，必须保留本网注明的“稿件来源”，并自负法律责任。</span></div>
        </div>
        <div class="legal-item">
          <div class="item-num"><span>NO.5</span></div>
          <div class="item-desc"><span>由于地址不明等原因，环球加盟网使用部分文字、摄影作品报酬未能及时支付，在此深表歉意。相关权利人如发现应该及时向环球加盟网提出书面权利通知，并提供身份证明、权属证明、具体链接（URL）及详细侵权情况证明。环球加盟网在收到上述法律文件后，将会依法尽快移除相关涉嫌侵权的内容。在此情况下，环球加盟网不承担任何责任。</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import top from '../components/top.vue'
// import bottom from '../components/bottom.vue'
export default {
  name: 'contact',
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
        meta: [{ vmid: 'keywords', name: 'keywords', content: title },
        { vmid: 'description', name: 'description', content: title }]
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

.contact-wrap,
.touch_top{
  width: 100%;
}
#contact {
  position: relative;
  width:1200px;
    margin: 20px auto;
    height:auto;
    .touch-us{
      position: absolute;
      display: inline-block;
      color: #fff;
      font-size: 30px;
      width: 200px;
      height: 150px;
      line-height: 150px;
      left: 0;
      top: -120px;
      background: #2D3036;
    }
  .title{
    color: #2D2828;
    font-size: 24px;
    margin-bottom: 35px;
  }
  li{
    width: 360px;
    height: 200px;
    text-align: center;
    float: left;
    border: 1px solid #bbb;
    margin-bottom: 40px;
    img{
      margin: 40px 0 0;
    }
    .name{
      font-size: 18px;
      color: #3D464D;
      margin: 14px 0 10px 0;
    }
    .desc{
      font-size: 14px;
      color: #3D464D;
      margin: 0 auto;
      width: 80%;
    }
  }
  .margin-lr{
    margin-left: 57px;
    margin-right: 57px;
  }
  .legal{
    margin-bottom: 100px;
    .title{
      margin: 25px 0 10px 0;
    }
    .legal-item{
      margin-top: 20px;
      height: 100px;
      width: 100%;
      font-size: 14px;
      background: #F5F5F5;
      border-radius: 8px;
      display: table;
      .item-num{
        width: 100px;
        height: 100%;
        line-height: 100px;
        float: left;
        color: #fff;
        background: #C59D72;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        span{
          display: inline;
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
        }
      }
      .item-desc{
        display: table;
        text-align: left;
        height: 100%;
        width: 1100px;
        float: left;
        color: #3D464D;
        span{
          display: table-cell;
            vertical-align: middle;
            padding: 0 20px;
        }
      }

    }
  }
}


</style>
