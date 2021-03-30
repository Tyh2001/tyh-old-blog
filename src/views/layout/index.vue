<template>
  <div id="layoutIndex">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#23282d"
      text-color="#dfdfdf"
      active-text-color="#ffd04b"
      router
    >
      <router-link class="myLogo" to="/">Tyh.</router-link>

      <div class="option">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/blog">我的动态</el-menu-item>
        <el-menu-item index="/article">技术文章</el-menu-item>
        <el-menu-item index="/comment">评论留言</el-menu-item>
      </div>

      <AboutMe />
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe'
export default {
  name: 'layoutIndex',
  components: {
    AboutMe
  }
}
</script>

<style lang="less" scoped>
.el-menu.el-menu--horizontal {
  border: 0;
}
#layoutIndex {
  padding-top: 60px;
}
// 导航栏
.el-menu-demo {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 60px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "微软雅黑";
  // logo
  .myLogo {
    font-size: 30px;
    font-weight: 600;
    color: #dfdfdf;
    cursor: pointer;
    margin-left: 40px;
    text-decoration: none;
    border: none;
  }
  .myLogo:hover {
    color: skyblue;
  }
  .option {
    display: flex;
    width: 500px;
  }
}
.el-menu::after,
.el-menu::before {
  display: none;
}
</style>
