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
import {Header,Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入后需要声明为全局组件，可以让别的组件来使用
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入时间格式化插件
import moment from 'moment'
Vue.filter('dateFormat',function(time){
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
})
// 构造Vue实例
var vm=new Vue({
    el:'#app',
    render:function(createElements){
        return createElements(app);
    },
    //挂载路由对象
    router:router
}) 