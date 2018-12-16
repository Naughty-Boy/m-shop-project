<template>
  <div>
    <!-- 轮播图区域 -->
    <loop-img :imgList="imgList"></loop-img>
    <!-- 小图标区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/news">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">资讯</div>
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
          <div class="mui-media-body">分类</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">推荐</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">主题</div>
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
      imgList: [{
        img:'./images/loop1.jpg'
      },{
        img:'./images/loop2.jpg'
      },{
        img:'./images/loop3.jpg'
      }]
    };
  },
  // methods: {
    // 失效
    // getLoopImg: function() {
      // this.$http
      //   .get("api/getloop")
      //   .then(function(res) {
      //     this.imgList = res.body.message;
      //   });
    // }
  // },
  created: function() {
    // this.getLoopImg();
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

