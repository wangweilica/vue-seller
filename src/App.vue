<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/seller">商家</router-link >
      </div>
      <div class="tab-item">
        <router-link to="/goods" >商品</router-link >
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

  </div>
</template>

<script>
import header from '@/components/header/Header.vue';
const ERR_OK = 0;
export default {
  data: function () {
    return {
      seller: {}
    };
  },
  created: function () {
    // `this` 指向 vm 实例
    // GET /someUrl
    this.$http.get('/api/seller').then(response => {
      // success callback
      response = response.body;
      if (response.code === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller.description);
      }
    }, response => {
      // error callback
    });
  },
  components: {
    'v-header': header
  }
};
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid red
    border-1px(rgb(8,26,27,1))
    .tab-item
      flex: 1
      text-align:center
      & > a  // 父选择器
        display:block
        font-size: 14px
        color:rgb(77,85,93)
        &.active
          color: rgb(240,20,20)

</style>
