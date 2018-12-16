<template>
  <mt-swipe :auto="4000" class="loop-item">
    <mt-swipe-item v-for="item in imgList" :key="item.id">
      <img :src="item.img">
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
    //接收外部传入的图片列表参数
  props:['imgList']
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
</style>

