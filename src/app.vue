<template>
  <div class="app-container">
    <!-- 顶部 Header区域 -->
    <mt-header fixed title="黑马论坛"></mt-header>
    <!-- 中间router-view区域 -->
    <h2>你好</h2>
    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">主页</span>
      </a>
      <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>
<script>
</script>

<style lang="less">
.app-container {
  padding-top: 40px;
}
</style>


