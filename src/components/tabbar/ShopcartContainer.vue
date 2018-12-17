<template>
  <div class="shopCartContainer">
    <div class="mui-card" v-for="item in productList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-clearfix">
          <img class="mui-pull-left" :src="item.thumb_path">
          <div class="info mui-pull-left">
            <h4 v-text="item.title"></h4>
            <!-- 商品参数 -->
            <div class="params mui-clearfix">
              <span class="mui-pull-left price">
                ￥{{item.sell_price*$store.getters.getCountForId[item.id]
                }}
              </span>
              <!-- 数量加减选择 -->
              <div class="select mui-pull-left">
                <span @click="$store.commit('countReduce',item.id)">-</span>
                <!-- 获取vuex中的商品数量 -->
                <input type="text" readonly v-model="$store.getters.getCountForId[item.id]">
                <span @click="$store.commit('countPlus',item.id)">+</span>
              </div>
              <span class="remove mui-pull-left" @click="removeProduct(item.id)">删除</span>
            </div>
          </div>
          <!-- mui开关 -->
          <div :class="['mui-switch','mui-switch-mini','mui-pull-right',item.select?'mui-active':'']"  @click="productSwitch(item.id,$event)">
						<div class="mui-switch-handle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-clearfix computedPrice">
          <div class="mui-pull-left">
            <p>您已选择了<span>{{selectCount}}</span>件商品</p>
            <p>总价格（不包含运费)：<span>￥{{result}}</span></p>
          </div>
          <button class="mui-btn mui-btn-danger mui-pull-right">去付款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      productList: [] //存放购物车列表的数组
    };
  },
  methods: {
    //获取购物车列表
    getShopCartList: function() {
      //从vuex中获取所有商品的id
      var arr = [];
      this.$store.state.shopCart.forEach(item => {
        arr.push(item.id);
      });
      //如果数组为空，则不需要发起请求
      if (arr.length < 1) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + arr.toString())
        .then(function(res) {
          this.productList = res.body.message;
          var selectResult=this.$store.getters.getSelectResult;
          this.productList.forEach(item => {
            //添加选择属性
            item.select=selectResult[item.id];
          });
          // console.log(this.productList)
        });
    },
    // 商品开关
    productSwitch: function(id,e) {
      this.productList.forEach(item => {
        if (item.id == id) {
          item.select = !item.select;
          // console.log(id,item.select)
        }
      });
      // this.$store.state.shopCart.forEach(item2=>{
      //   if(item2.id==id){
      //     item2.sure=!item2.sure;
      //     // console.log(this.$store.state)
      //   }
      // })
      this.$store.commit('selectChange',id);
      e.currentTarget.classList.toggle('mui-active')
    },
    removeProduct:function(id){
      //从当前商品列表删除
      this.productList.forEach((item,index)=>{
        if(item.id==id){
          this.productList.splice(index,1);
        }
      })
      //从vuex中删除
      this.$store.commit('removeProduct',id)
    }
  },
  created: function() {
    this.getShopCartList();
  },
  computed:{
    result:function(){
      var price=0;
      this.$store.state.shopCart.forEach(item=>{
        if(item.sure){
          price+=item.price*item.count;
        }
      })
      return price;
    },
    selectCount:function(){
      var count=0;
      this.$store.state.shopCart.forEach(item=>{
        if(item.sure){
          count+=item.count;
        }
      })
      return count;
    }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 60px;
  margin-right: 10px;
}
.info {
  width: 55%;
  h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    height: 28px;
    line-height: 28px;
  }
  .price {
    color: orange;
  }
  .remove {
    color: red;
  }
}
.shopCartContainer {
  //数量加减
  .select {
    display: flex;
    margin: 0 10px;
    height: 28px;
    width: 30%;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    span,
    input {
      flex: 1;
      height: 100%;
      text-align: center;
    }
    span {
      background-color: rgba(177, 177, 177, 0.5);
      line-height: 28px;
      height: 28px;
      &:active {
        background-color: #777;
        color: white;
      }
    }
    input {
      border-radius: 0;
      padding: 0 5px;
      border: 0;
    }
  }
}
.computedPrice {
  span {
    color: orange;
    font-size: 1.2em;
  }
}
</style>
