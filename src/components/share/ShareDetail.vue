<template>
  <div class="container">
    <h4 v-text="title"></h4>
    <div class="mui-clearfix info">
      <p class="mui-pull-left">发表时间：{{addTime | dateFormat}}</p>
      <p class="mui-pull-right">点击量：{{clickCount}}</p>
    </div>
    <hr>
    <!-- 缩略图区域 -->
    <div class="img-list">
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
    <p class="content" v-html="content"></p>
    <!-- 使用评论组件 -->
    <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from "../subComponents/Comment.vue";
export default {
  components: {
    comment
  },
  data: function() {
    return {
      title: "",
      addTime: "",
      content: "",
      clickCount: "",
      id: "",
      list: [] //缩略图的数组
    };
  },
  methods: {
    //获取详细页信息
    getImgDetail: function() {
      this.$http.get("api/getimageInfo/" + this.$route.params.id).then(function(res) {
          // console.log(res);
          this.title = res.body.message[0].title;
          this.addTime = res.body.message[0].add_time;
          this.content = res.body.message[0].content;
          this.clickCount = res.body.message[0].click;
          this.id = res.body.message[0].id;
        });
    },
    //获取缩略图
    getThumbs: function() {
      this.$http.get("api/getthumimages/" + this.$route.params.id).then(function(res){
        // console.log(res)
        this.list=res.body.message;
      })
    },
    handleClose () {
        console.log('close event')
      }
  },
  created: function() {
    this.getImgDetail();
    this.getThumbs();
  }
};
</script>
<style lang="less" scoped>
.container {
  > h4 {
    text-align: center;
    color: orange;
    padding: 10px 0;
  }
  > .info {
    padding: 0 5px;
    > p {
      font-size: 10px;
    }
  }
  > hr {
    margin: 0;
  }
}
</style>

