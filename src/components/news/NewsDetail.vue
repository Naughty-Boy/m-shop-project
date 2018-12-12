<template>
    <div>
        <H2 v-text="contentObj.title" class="title"></H2>
        <div class="mui-clearfix other">
            <span class="mui-pull-left">时间:{{contentObj.add_time | dateFormat}}</span>
            <span class="mui-pull-right">点击量:{{contentObj.click}}</span>
        </div>
        <hr/>
        <div v-html="contentObj.content" class="content">

        </div>
        <!-- 向子组件传递id值 -->
        <comment :id="$route.params.id"></comment>
    </div>
</template>
<script>
import Comment from '../subComponents/Comment.vue'
export default {
    data:function(){
        return {
            contentObj:''
        }
    },
    methods:{
        getContent:function(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.$route.params.id).then(function(res){
                // console.log(res);
                this.contentObj=res.body.message[0];
            })
        }
    },
    created:function(){
        this.getContent();
    },
    components: {
        Comment
    }
}
</script>
<style lang="less" scoped>
    .title {
        color: orange;
        text-align: center;
        font-size: 18px;
        padding: 5px 0;
    }
    .other {
        color: #ddd;
        font-size: 12px;
        padding: 0 5px;
    }
    hr {
        margin: 0 auto;
        margin-bottom: 5px;
        outline: none;
        box-sizing: border-box;
    }
    .content {
        padding: 0 5px;
    }
</style>
