<template>
  <div class="app-container">

    <!--  顶部 Header 区域  -->
    <mt-header fixed title=" hello world"></mt-header>
    <!-- 中间的路由 router-view 区域 -->

    <!-- 底部 Tabbar 区域 -->
        <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="">
        会员
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="">
        购物车
      </mt-tab-item>
      <mt-tab-item id="搜索">
        <img slot="icon" src="">
        搜索
      </mt-tab-item>
    </mt-tabbar>

<h1>123</h1>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  .app-container{
    margin-top:40px;
  }
</style>
