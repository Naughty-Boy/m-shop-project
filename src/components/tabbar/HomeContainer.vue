<template>
  <div>
    <!-- 轮播图区域 -->
    <loop-img :imgList="imgList"></loop-img>
    <!-- 小图标区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/news">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/share">
          <img src="../../images/menu2.png">
          <div class="mui-media-body">分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/productList">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">商品</div>
        </router-link>
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
// 导入轮播图组件
import loopImg from '../subComponents/LoopImg.vue'
export default {
  data: function() {
    return {
      imgList: []
    };
  },
  methods: {
    getLoopImg: function() {
      this.$http
        .get("api/getlunbo")
        .then(function(res) {
          this.imgList = res.body.message;
        });
    }
  },
  created: function() {
    this.getLoopImg();
  },
  components:{
    loopImg
  }
};
</script>
<style lang="less" scoped>
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

