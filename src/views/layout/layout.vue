<template>
  <div>
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- 底部tab -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/part">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
