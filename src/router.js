import VueRouter from 'vue-router'
//导入四个分页组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import OwnContainer from './components/tabbar/OwnContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'
var router=new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: HomeContainer
        },
        {
            path:'/search',
            component: SearchContainer
        },
        {
            path:'/shopcart',
            component: ShopcartContainer
        },{
            path:'/own',
            component: OwnContainer
        }
    ],
    linkActiveClass: 'mui-active'
});
export default router