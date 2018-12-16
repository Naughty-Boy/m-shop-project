<template>
    <div>
        <comment :id="$route.params.id"></comment>
    </div>
</template>
<script>
//导入评论组件
import comment from '../subComponents/Comment.vue'
export default {
    components:{
        comment
    }
}
</script>
<style lang="less" scoped>

</style>


