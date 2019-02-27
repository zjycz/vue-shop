<template>
    <div class="newsInfo">
        <van-nav-bar fixed :title="newsInfo.title" left-text="返回" left-arrow  @click-left="onClickLeft" />
        <div class="header">
            <div class="subtitle">
                <span class="ctime">发表时间:{{newsInfo.ctime}}</span>
                <span class="views">点击次数:{{newsInfo.views}}</span>
            </div>
        </div>        
        <div class="subject" v-html="newsInfo.content"></div>  
        <comment :id='id'></comment>

    </div>
</template>

<script>
import comment from "../../components/comment.vue"

export default {
    data(){
        return{
            msg:"",
            comments:[],
            id: this.$route.params.id,
            newsInfo:{}
        }
    },
    created(){
        this.$http.get("/v1/news/getNewsInfo/" + this.id).then(res =>{   
            if(res.data.status == 200) {

                this.newsInfo = res.data.data
                console.log(this.newsInfo)
            }               
            
        })
        
    },
    methods:{
        onClickLeft(){

        }
    },
    components:{
        comment
    }
}
</script>

<style lang="less">
.newsInfo{
    .header {
        width: 100%;
        // height:50px;
        border-bottom: 1px solid #ccc;
        padding: 5px;
        .title {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
        .subject{
            display: flex;
            justify-content: space-between;
            padding: 10px;
            font-size: 12px;        
        }
    }    
    .subject {
        padding: 10px;
        margin-top: 20px;
        font-size: 14px;
        border-bottom: 1px solid #ccc;
        line-height: 2em;
        text-align: left;
        img {
            width: 100%;
        }
    }    
}

</style>
