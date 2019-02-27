<template>
  <div class="newsList-tab">
    <van-tabs sticky @click="onClick">
      <van-tab v-for="(item,index) in newsCategory" :title="item.name" :key="index" class="tab">
            <ul class="newsList-info">
                <li @click="toNewsInfo(item.id)"  v-for="(item,index) in newsList" :key="index" class="li-list">
                    <div class="icon">
                        <img :src="item.icon">
                    </div>
                    <div class="info">
                        <div class="title">{{item.title}}</div>
                        <div class="subtitle">
                            <span>发表时间:{{item.ctime}}</span>
                            <span>点击次数:{{item.views}}</span>
                        </div>                    
                    </div>
                </li>
            </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      newsList: [],
      newsCategory: []
    };
  },
  created() {
    this.$http.get("/v1/news/getNewsCategories").then(res => {
      if (res.data.status == 200) {
        this.newsCategory = res.data.data
        // console.log(this.newsCategory);
        this.getNewsList(0)      
      }
      
    });
  },
  methods: {
    onClick(index, title) {
        this.getNewsList(index)
    },
    toNewsInfo(id){
        this.$router.push("/newsInfo/"+ id)
        console.log(id)
        
    },
    getNewsList(index){
        let newsCategoryInfo = {
            cate: this.newsCategory[index].id,
            page: 1,
            pageSize: 10
        };
        this.$http.get("/v1/news/getNewsList",{params:newsCategoryInfo}).then(res =>{
            // console.log(res);           
            this.newsList = res.data.data.news
            // console.log(this.newsList);         
        })
    }    
      
  }
};
</script>

<style lang="less" scope>
.newsList-tab{
    padding-bottom: 50px;   
    width: 100%;
    .newsList-info{
        width: 100%;
        .li-list{
            width: 100%;
            border-bottom: 1px solid #333;
            height: 80px;
            padding: 5px;
            display: flex;
            .icon{
                width: 100px;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .info{
                flex: 1;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: space-between;                    
                .title{
                    font-size: 14px;
                }
                .subtitle{
                    font-size: 12px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>

