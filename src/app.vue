<template>
  <div class="app-container">
    <!-- 顶部 Header区域 -->
    <mt-header fixed title="黑马论坛"></mt-header>
    <!-- 中间router-view区域 -->
    <h2>你好</h2>
    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">主页</span>
      </router-link>
      <router-link class="mui-tab-item mui-active" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="own">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
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


