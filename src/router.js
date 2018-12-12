import VueRouter from 'vue-router'
//导入四个分页组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import OwnContainer from './components/tabbar/OwnContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'
//新闻组件
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'
var router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeContainer,
        },
        {
            path: '/search',
            component: SearchContainer
        },
        {
            path: '/shopcart',
            component: ShopcartContainer
        }, {
            path: '/own',
            component: OwnContainer
        },
        //新闻资讯
        {
            path: '/home/news',
            component: NewsList
        },{
            path:'/home/newsDetail/:id',
            component:NewsDetail
        }
    ],
    linkActiveClass: 'mui-active'
});
export default router