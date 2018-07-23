<template>
  <div id="article-info" class="article-info">
    <div class="article-wrap" v-if="type=='article'" :ff="(detailInfo.date)">
      <h1>{{detailInfo.title}}</h1>
      <div class="item-desc" ><strong class="item">{{detailInfo.authorName}}</strong> <span> · </span>{{detailInfo.date | formatTime}}<span> · </span>{{detailInfo.hangYe}}</div>
      <section class="article-detail">
        <div v-html="detailInfo.content"></div>
      </section>
    </div>
    <div class="article-wrap"  v-if="type=='biz'">
      <h1>{{detailInfo.hangYe}} | {{detailInfo.name}}</h1>
      <div class="item-wrap">
        <label v-for="item in detailInfo.lab" :class="[item=='人气高'?'high':'',item=='热门'?'hot':'']" v-if="item">{{item}}</label>
      </div>
      <section class="article-detail">
        <div v-html="detailInfo.xiangXiXinXi"></div>
      </section>
    </div>
    <!-- <div class="article-wrap">
      <h1>零擀面包丨讲究，不将就</h1>
      <div class="item-wrap"><label class="high">人气高</label><label class="hot">热门</label><label>低门槛</label></div>
      <div class="item-desc"><strong class="item">爱吃酸菜鱼</strong> · 3小时前 · 餐饮</div>
      <section class="article-detail">
        在从前的纸媒时代，话语权是高度集中的，报纸杂志写什么，读者看什么；几乎全中国的意见领袖都集中在了各大杂志报刊里面，并且通过杂志的审美取向对读者进行筛选。比如追求生活品质的读者大部分选择《三联生活周刊》，数码爱好者不少也会订阅《大众软件》，这种内容输出几乎是单向的，一本杂志里面大部分的内容对于读者来说可能都是没有阅读价值的。
        <img src="../../assets/article.png">
        始终同人民想在一起、干在一起，就要不忘初心，以造福人民为最大政绩。我国社会主要矛盾转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，不只意味着全面小康一个不能少、一个不掉队，也意味着还老百姓蓝天白云、清水绿岸；不仅要求完善治理提高民生保障水平。
        <img src="../../assets/article.png">
        始终同人民想在一起、干在一起，就要不忘初心，以造福人民为最大政绩。我国社会主要矛盾转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，不只意味着全面小康一个不能少、一个不掉队，也意味着还老百姓蓝天白云、清水绿岸；不仅要求完善治理提高民生保障水平。
        <img src="../../assets/article.png">
        始终同人民想在一起、干在一起，就要不忘初心，以造福人民为最大政绩。我国社会主要矛盾转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，不只意味着全面小康一个不能少、一个不掉队，也意味着还老百姓蓝天白云、清水绿岸；不仅要求完善治理提高民生保障水平。
      </section>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'mini-program',
  props:['detailInfo','bizInfo','type']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './styles.less';
</style>
