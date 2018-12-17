<template>
  <div class="productInfo">
    <!-- 图片展示板块 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 自己封装的轮播图组件 -->
          <loop-img :imgList="imgList"></loop-img>
        </div>
      </div>
    </div>
    <!-- 参数选择 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h4>{{title}}</h4>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            市场价：
            <span class="oldPrice">￥{{market_price}}</span>销售价：
            <span class="newPrice">￥{{sell_price}}</span>
          </div>
          <div class="buyCount mui-clearfix">
            <span>购买数量：</span>
            <div class="select">
              <span @click="reduce">-</span>
              <input type="text" v-model="buyCount">
              <span @click="plus">+</span>
            </div>
          </div>
          <div>
            <button class="mui-btn mui-btn-warning">立即购买</button>
            <button class="mui-btn mui-btn-danger" @click="addToShopcart">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 详细信息 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goods_no}}</p>
          <p>库存情况：{{stock_quantity}}件</p>
          <p>上架时间：{{add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer info-footer">
        <button
          class="mui-btn mui-btn-warning mui-btn-block mui-btn-outlined"
          @click="moreDetail(id)"
        >更多详情</button>
        <button
          class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined"
          @click="seeComment(id)"
        >查看评论</button>
      </div>
    </div>
  </div>
</template>
<script>
// 导入轮播图组件
import loopImg from "../subComponents/LoopImg.vue";
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      imgList: [], //存放轮播图的数组
      id: "",
      title: "",
      add_time: "",
      goods_no: "",
      stock_quantity: "",
      market_price: "",
      sell_price: "",
      buyCount: 1 //购买数量
    };
  },
  methods: {
    //获取轮播图数据
    getLoopImg: function() {
      this.$http
        .get("api/getthumimages/" + this.$route.params.id)
        .then(function(res) {
          res.body.message.forEach(function(item) {
            item.img = item.src;
          });
          this.imgList = res.body.message;
        });
    },
    //获取商品信息
    getDetailInfo: function() {
      this.$http
        .get("api/goods/getinfo/" + this.$route.params.id)
        .then(function(res) {
          // console.log(res);
          this.title = res.body.message[0].title;
          this.id = res.body.message[0].id;
          this.add_time = res.body.message[0].add_time;
          this.goods_no = res.body.message[0].goods_no;
          this.stock_quantity = res.body.message[0].stock_quantity;
          this.sell_price = res.body.message[0].sell_price;
          this.market_price = res.body.message[0].market_price;
        });
    },
    //增加商品数量按钮
    plus: function() {
      if (this.buyCount >= this.stock_quantity) {
        this.buyCount = this.stock_quantity;
        mui.alert("已达到最大数量~");
        return;
      }
      this.buyCount++;
    },
    //减少商品数量按钮
    reduce: function() {
      if (this.buyCount == 1) {
        return;
      }
      this.buyCount--;
    },
    //编程式导航
    moreDetail: function(id) {
      this.$router.push({ name: "moreDetail", params: { id } });
    },
    seeComment: function(id) {
      this.$router.push({ name: "SeeComment", params: { id } });
    },
    //加入购物车
    addToShopcart: function() {
      var product = {
        id: this.id,
        price: this.sell_price,
        count: this.buyCount,
        maxCount: this.stock_quantity,
        sure: true
      };
      //调用vuex中的添加购物车方法
      this.$store.commit("pushProduct", product);
      Toast({
        message: "添加成功~",
        position: "bottom",
        duration: 2000
      });
    }
  },
  watch: {
    buyCount: function(newVal, oldVal) {
      //判断非数
      if (isNaN(newVal)) {
        mui.alert("请输入正确的数量");
        this.buyCount = 1;
      }
      // 判断数量总和
      if (newVal > this.stock_quantity) {
        mui.alert("超出库存");
        this.buyCount = this.stock_quantity;
        return;
      }
      // console.log(this)    //当前内组件的实例对象
    }
  },
  created: function() {
    this.getLoopImg();
    this.getDetailInfo();
  },
  components: {
    //注册轮播图组件
    loopImg
  }
};
</script>
<style lang="less" scoped>
.productInfo {
  h4 {
    font-weight: 600;
    font-size: 16px;
  }
  .price {
    .newPrice {
      color: orange;
      font-weight: 600;
    }
    .oldPrice {
      text-decoration: line-through;
      margin-right: 25px;
    }
  }
  .buyCount {
    margin: 10px 0;
    & > span,
    & > div {
      float: left;
    }
    & > span {
      height: 28px;
      line-height: 28px;
    }
    //数量加减
    & > div {
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
}
.info-footer {
  display: block;
  > button {
    padding: 5px 0;
  }
  > button:last-of-type {
    margin-bottom: 0;
  }
}
</style>

