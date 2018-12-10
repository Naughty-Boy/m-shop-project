// 导入Vue包
import Vue from 'vue'
//导入vue-router包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
// 导入自己的vue-router模块
import router from './router.js'
//导入容器组件
import app from './app.vue'

// 导入mui的样式
import './lib/mui/css/mui.min.css'
//按需引入mint-ui提供的组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'
// 引入后需要声明为全局组件，可以让别的组件来使用
Vue.component(Header.name,Header)

// 构造Vue实例
var vm=new Vue({
    el:'#app',
    render:function(createElements){
        return createElements(app);
    },
    //挂在路由对象
    router:router
}) 