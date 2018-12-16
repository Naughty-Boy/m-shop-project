<template>
  <div class="container">
    <h4 v-text="title"></h4>
    <hr>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    getContent: function() {
      console.log(this.$route.params.id);
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(function(res) {
          console.log(res);
          this.title = res.body.message[0].title;
          this.content = res.body.message[0].content;
        });
    }
  },
  created: function() {
    this.getContent();
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 10px;
  text-align: center;
  h4 {
    color: orange;
    font-size: 16px;
  }
  .content {
      margin: 0;
      width: 100%;
      text-align: center;
      overflow: hidden;
      img {
        width: 100%;
      }
  }
}
</style>

