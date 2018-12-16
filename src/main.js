// 导入Vue包
import Vue from 'vue'
//导入vue-router包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
//安装VueResource
Vue.use(VueResource)
//导入vuex
import Vuex from 'vuex'
//安装Vuex
Vue.use(Vuex)
//设置根地址
Vue.http.options.root="http://www.liulongbin.top:3005"
// 导入自己的vue-router模块
import router from './router.js'
//导入容器组件
import app from './app.vue'

// 导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需引入mint-ui提供的组件
import {Header,Button,Swipe, SwipeItem,Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入后需要声明为全局组件，可以让别的组件来使用
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);


// 导入时间格式化插件
import moment from 'moment'
//全局过滤器
Vue.filter('dateFormat',function(time){
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
})
//导入Vue的预览插件vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 每当页面加载main.js时，访问localstorage查看是否有保存的数据,不存在则为一个空数组
var shopCart=JSON.parse(localStorage.getItem('shopCart')||'[]');

// 创建数据仓储对象
var store=new Vuex.Store({
    //存放数据
    state:{
        shopCart:shopCart       //购物车数组用来存放商品信息，例如{id:商品id,count:商品数量,price:商品价格,sure:是否确认结算}
    },
    //声明操作数据的方法
    mutations:{
        //添加商品方法
        pushProduct:function(state,arg){
            //判断是否已经有该商品，是则添加数量，反之push进新商品
            var flag=false;         //判断标记
            state.shopCart.some(item=>{
                if(item.id==arg.id){
                    item.count+=parseInt(arg.count);      //因为传递过来的是字符串，所以需要转换一下
                    flag=true;
                    return true;
                }
            })
            if(!flag){
                state.shopCart.push(arg);
            }
            //在购物车列表发生变化时，进行本地存储达到数据持久化
            localStorage.setItem('shopCart',JSON.stringify(state.shopCart));
        }
    },
    getters:{
        productCount:function(state){
            var count=0;
            state.shopCart.forEach(item=>{
                count+=item.count;

            })
            return count;
        }
    }
})


// 构造Vue实例
var vm=new Vue({
    el:'#app',
    render:function(createElements){
        return createElements(app);
    },
    //挂载路由对象
    router:router,
    //挂在仓储对象
    store: store
}) 
