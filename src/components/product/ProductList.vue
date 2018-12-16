<template>
  <div class="productContainer">
    <router-link :to="'/home/productDetail/'+item.id" tag="div" class="productList" v-for="(item,index) in list" :key="index">
      <img :src="item.img_url" alt>
      <h5 v-text="item.title"></h5>
      <div class="description">
        <div class="price mui-clearfix">
          <p class="curPrice mui-pull-left">￥{{item.sell_price}}</p>
          <p class="oldPrice mui-pull-right">￥{{item.market_price}}</p>
        </div>
        <div class="other mui-clearfix">
          <p class="ino mui-pull-left">甩卖中</p>
          <p class="count mui-pull-right">剩余{{item.stock_quantity
}}件</p>
        </div>
      </div>
    </router-link>
    <button class="mui-btn mui-btn-block mui-btn-warning btn" @click="loadMore">加载更多</button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data:function(){
        return {
            page:1,
            list:[]         //存放商品列表的数组
        }
    },
    methods:{
        getProductList:function(page){
            this.$http.get('api/getgoods?pageindex='+page).then(function(res){
                if(res.body.message.length==0){
                    Toast('没有更多数据了~');
                    return ;
                }
                this.list=this.list.concat(res.body.message);
            })
        },
        loadMore:function(){
            this.page++;
            this.getProductList(this.page);
        }
    },
    created:function(){
        this.getProductList(this.page);
    }
};
</script>
<style lang="less" scoped>
.productContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  .productList {
    width: 49%;
    border: 1px solid #eee;
    margin-bottom: 8px;
    box-shadow: 0 0 6px #777;
    padding: 1px;
    //通过flex将图片顶端靠齐，描述底端靠齐
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
      min-height:270px;
    }
    h5 {
      font-size: 14px;
      font-weight: 600;
      color: black;
    }
    .description {
      background-color: #eee;
      padding: 5px;
      p {
        margin: 0;
      }
      .curPrice {
        color: orange;
        height: 14px;
        line-height: 14px;
      }
      .oldPrice {
        text-decoration: line-through;
        height: 14px;
      }
    }
  }
  .btn {
      padding: 5px;
  }
}
</style>

