<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar"><img width="64" height="64" :src="seller.avatar"></div>
      <div class="content">
        <div class="title">
          <span class="brand">{{seller.brand}}</span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
  </div>


</template>
<script type="text/ecmascript-6">
  export default {
//    props: ['seller']
    props: {
      seller: Object
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .header
    color: #fff
    background: #a09999
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
</style>
