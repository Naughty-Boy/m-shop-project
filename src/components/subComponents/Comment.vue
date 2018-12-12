<template>
  <div class="comment-box">
    <h4>发表评论</h4>
    <textarea placeholder="请输入要评论的内容:" v-model="content"></textarea>
    <button class="mui-btn mui-btn-block mui-btn-warning" @click="commit">确认发表</button>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in commentList" :key="index">
        {{item.content}}
        <div class="mui-media-body">
          <p class="mui-ellipsis mui-pull-left">第{{index+1}}楼&nbsp;&nbsp;</p>
          <p class="mui-ellipsis mui-pull-left">时间：{{item.add_time | dateFormat}}</p>
          <p class="mui-ellipsis mui-pull-right">用户：{{item.user_name}}</p>
        </div>
      </li>
    </ul>
    <button
      type="button"
      class="mui-btn mui-btn-warning mui-btn-outlined mui-btn-block"
      @click="loadmore"
    >加载更多</button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      page: 1,
      commentList: [],
      content: ""
    };
  },
  methods: {
      //获取评论
    getComment: function() {
      this.$http
        .get(
          "api/getcomments/" + this.id + "?pageindex=" + this.page
        )
        .then(
          function(res) {
            if (res.body.message.length < 1) {
              Toast({
                message: "没有更多数据了~",
                position: "middle",
                duration: 2000
              });
            }
            this.commentList = this.commentList.concat(res.body.message);
          },
          function(err) {
            Toast({
              message: "获取数据失败了~",
              position: "middle",
              duration: 2000
            });
          }
        );
    },
    //加载更多
    loadmore: function() {
      this.page++;
      this.getComment();
    },
    //提交评论
    commit: function() {
      if (this.content.trim().length < 1) {
        Toast({
          message: "请输入评论内容~",
          position: "middle",
          duration: 2000
        });
        return;
      }
      this.$http
        .post(
          "api/postcomment/" + this.id,
          { id: this.id, content: this.content },
          {}
        )
        .then(function(res) {
            location.reload();
          if (res.body.status == 0) {
              this.content='';
            Toast({
              message: "提交成功~",
              position: "middle",
              duration: 2000
            });
          }
        });
    }
  },
  created: function() {
    this.getComment();
  },
  //获取父组件传递的id值
  props:["id"]
};
</script>
<style lang="less" scoped>
.comment-box {
  padding: 0 5px;
  > textarea {
    font-size: 14px;
    margin-bottom: 0;
  }
  > button {
    height: 26px;
    line-height: 0px;
    font-size: 18px;
  }
}
</style>

