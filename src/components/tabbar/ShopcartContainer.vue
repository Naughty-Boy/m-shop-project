<template>
  <div class="shopCartContainer">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner mui-clearfix">
          <img class="mui-pull-left" src="../../images/menu1.png">
          <div class="info mui-pull-left">
            <h4>这是商品的标题</h4>
            <!-- 商品参数 -->
            <div class="params mui-clearfix">
              <span class="mui-pull-left price">￥999</span>
              <!-- 数量加减选择 -->
              <div class="select mui-pull-left">
                <span @click="reduce">-</span>
                <input type="text">
                <span @click="plus">+</span>
              </div>
              <span class="remove mui-pull-left">删除</span>
            </div>
          </div>
          <!-- mui开关 -->
          <div
            :class="['mui-switch','mui-switch-mini','mui-pull-right',shopSwitch?'mui-active':'']"
            @click="shopSwitch=!shopSwitch"
          >
            <div class="mui-switch-handle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">{{shopSwitch}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      shopSwitch: false
    };
  },
  methods: {
    //增加商品数量按钮
    plus: function() {},
    //减少商品数量按钮
    reduce: function() {}
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
</style>
