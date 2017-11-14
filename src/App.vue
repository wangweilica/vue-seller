<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商家</div>
      <div class="tab-item">商品</div>
    </div>
    <div class="content">
      I'm content
    </div>

  </div>
</template>

<script>
import header from '@/components/header/Header.vue';
export default {
  components: {
    'v-header': header
  }
};
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align:center
</style>
