<template>
  <div id="introduction" class="introduction">
    <div class="introduction-wrap">
      <h2>品牌简介</h2>
      <!-- <div class="introduction-detail" v-for="(info, index) in baseInfo" v-if="info.code=='JIBENXINXI'">
        <div >
          <ul>
            <li v-for="(property, ind) in info.propertyValueVos" v-if="property.code!='XIANGMUJIANJIE'" :class="info.propertyValueVos.length==ind+1?'bbottom0':''">{{property.name}}<div class="detail" :class="ind%2 == 0?'_detail':''">{{property.values[0] || ''}}</div></li>
          </ul>
        </div>
      </div> -->
    
      <div class="introduction-detail">
            <ul>
              <li>总部<div class="detail ">{{baseInfo.zongBu}}</div></li>
              <li>投资金额<div class="detail _detail">{{baseInfo.touZiJine}}</div></li>
              <li>所属行业<div class="detail">{{baseInfo.hangYe}}</div></li>
              <li>店铺面积<div class="detail _detail">{{baseInfo.dianPuMianji}}</div></li>
              <li class="bbottom0">店铺数量<div class="detail">{{baseInfo.dianPuShuliang}}</div></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mini-program',
  props:['baseInfo'],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
