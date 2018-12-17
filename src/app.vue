<template>
  <div class="app-container">
    <!-- 顶部 Header区域 -->
    <mt-header fixed title="IGO商城">
      <mt-button v-if="back" icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>
    <!-- 中间router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部tabbar区域 -->
    <mt-tabbar>
      <mt-tab-item>
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <router-link to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">主页</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <router-link to="/search">
          <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
          <span class="mui-tab-label">数码</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <router-link to="/shopcart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <!-- 从vuex中获取购物车中商品的数量 -->
            <span class="mui-badge" v-if="shopcartShow">{{$store.getters.productCount}}</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <router-link to="own">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">我的</span>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  data:function(){
    return {
      back:false,
      shopcartShow:true
    }
  },
  methods:{
    //返回按钮方法，返回上一页
    goBack:function(){
      this.$router.go(-1);
    }
  },
  components: {
    "mt-tabbar": Tabbar,
    "mt-tab-item": TabItem
  },
  created:function(){
    if(this.$store.getters.productCount<1){
          this.shopcartShow=false;
      }else{
        this.shopcartShow=true;
      }
  },
  watch: {
    //监视路由的改变，判断是否需要显示返回按钮
    $route: function(newVal, oldVal) {
      if (
        newVal.path == "/home" ||
        newVal.path == "/search" ||
        newVal.path == "/shopcart" ||
        newVal.path == "/own"
      ) {
        this.back=false;
        return;
      }
      this.back=true;
    },
    '$store.getters.productCount':function(){
      // console.log(this.$store.getters.productCount)
      if(this.$store.getters.productCount<1){
          this.shopcartShow=false;
      }else{
        this.shopcartShow=true;
      }
    }
  }
};
</script>

<style lang="less">
body {
  background-color: white !important;
}
.active {
  color: #ee7600 !important;
  font-weight: 700;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .mint-header {
    background: linear-gradient(to right, #ee7600, orange, #ee7600);
    z-index: 999 !important;
  }
  .mint-tabbar {
    position: fixed;
    bottom: 0;
    a {
      color: #777;
    }
    .mui-icon {
      display: block;
      position: relative;
      .mui-badge {
        left: 50%;
        transform: translateX(50%);
        margin-left: 0;
      }
    }
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(100%);
  position: absolute;
}
.v-leave-to {
  transform: translateY(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>


