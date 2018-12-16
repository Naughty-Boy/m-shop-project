<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        data-scroll="1"
      >
        <div
          class="mui-scroll"
          style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);"
        >
          <a
            class="mui-control-item"
            data-wid="tab-top-subpage-1.html"
            v-for="(item,index) in categoryList"
            :key="index"
            @click="setCategoryId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul>
      <router-link tag="li" :to="'/home/shareDetail/'+item.id" v-for="(item,index) in list" :key="index">
        <img v-lazy="item.img_url">
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//导入mui的JS文件，实现mui组件的初始化
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      categoryList: [],
      list: [] //图片列表的数组
    };
  },
  //生命周期函数，当页面元素加载完后执行
  mounted: function() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //获取分享信息分类
    this.getCategory();
    this.getListById(0); //默认获取图片列表
  },
  methods: {
    getCategory: function() {
      //获取分类列表
      this.$http.get("api/getimgcategory").then(function(res) {
        this.categoryList = res.body.message;
      });
    },
    getListById: function(id) {
        this.list='';
      //根据id获取不同的图片列表
      this.$http.get("api/getimages/" + id).then(function(res) {
        if (res.body.message.length == 0) {
          let instance = Toast("获取失败~");
          setTimeout(() => {
            instance.close();
            // location.href = location.pathname + "#/home";
          }, 2000);
          return;
        }
        this.list = res.body.message;
      });
    },
    setCategoryId: function(id) {
      this.getListById(id);
    }
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
body {
  ul {
    margin: 0;
    padding: 0 10px;
    li {
      list-style: none;
      border: 1px solid rgba(0, 0, 0, 0.5);
      .info {
          background: rgba(0,0,0,.1);
          padding: 5px 10px;
          font-size: 14px;
          font-weight: 700;
          overflow: hidden;
          .content {
              font-size: 14px;
              font-weight: normal;
          }
      }
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }
  }
}
</style>

