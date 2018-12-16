import VueRouter from 'vue-router'
//导入四个分页组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import OwnContainer from './components/tabbar/OwnContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'
//新闻组件
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'
//分享组件
import ShareList from './components/share/ShareList.vue'
import ShareDetail from './components/share/ShareDetail.vue'
//商品组件
import ProductList from './components/product/ProductList.vue'
import ProductDetail from './components/product/ProductDetail.vue'
import MoreDetail from './components/product/MoreDetail.vue'
import SeeComment from './components/product/SeeComment.vue'
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
        }, {
            path: '/home/newsDetail/:id',
            component: NewsDetail
        }, 
        // 用户分享
        {
            path: '/home/share',
            component: ShareList,
        },{
            path:'/home/shareDetail/:id',
            component:ShareDetail
        },
        //商品展示
        {
            path:'/home/productList',
            component:ProductList
        },{
            path:'/home/productDetail/:id',
            component:ProductDetail
        },{
            path:'/home/moreDetail/:id',
            component:MoreDetail,
            name:'moreDetail'
        },{
            path:'/home/SeeComment/:id',
            component:SeeComment,
            name:'SeeComment'
        }
    ],
    linkActiveClass: 'active'
});
export default router