<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media mui-clearfix" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsDetail/'+item.id" class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          {{item.title}}
          <div class="mui-media-body mui-row">
            <p class="mui-ellipsis mui-pull-left">{{item.add_time | dateFormat}}</p>
            <p class="mui-ellipsis mui-pull-right">点击量:{{item.click}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
// // 导入时间格式化插件
// import moment from 'moment'
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      newsList: []
    };
  },
  methods: {
    getNews: function() {
      this.$http.get("api/getnewslist").then(
        function(res) {
          this.newsList = res.body.message;
          console.log(res)
        },
        function(err) {
          let instance = Toast("获取失败~");
          setTimeout(() => {
            instance.close();
            location.href = location.pathname + "#/home";
          }, 2000);
        }
      );
    }
  },
  created: function() {
    this.getNews();
  }
};
</script>
<style>
</style>


