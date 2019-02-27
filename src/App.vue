<template>
  <div id="app">
    <van-tabbar v-model="active" class="tabbar">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="search" info="5">
        <router-link to="/news">新闻</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" info="20">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
};
</script>

<style lang="less" scope>

</style>
