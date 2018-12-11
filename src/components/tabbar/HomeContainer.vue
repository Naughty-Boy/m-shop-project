<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000" class="loop-item">
      <mt-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 小图标区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/news">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu2.png">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu4.png">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      imgList: []
    };
  },
  methods: {
    getLoopImg: function() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(function(res) {
          this.imgList = res.body.message;
        });
    }
  },
  created: function() {
    this.getLoopImg();
  }
};
</script>
<style lang="less" scoped>
.loop-item {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-table-view.mui-grid-view {
  background-color: white;
  border: none;
  & > li {
    border: none;
    img {
      width: 60px;
    }
  }
}
</style>

