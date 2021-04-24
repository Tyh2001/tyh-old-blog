<template>
  <div id="blogIndex">
    <Header />
    <BlogList />
    <!-- 返回顶部 -->
    <el-backtop>
      <i class="tyh tyh-huojian" />
    </el-backtop>

    <div class="video">
      <video src="./video/背景视频.mp4" autoplay loop muted></video>
    </div>
  </div>
</template>

<script>
import BlogList from './components/BlogList' // 博客列表组件
import Header from './components/Header' // 博客列表组件
export default {
  name: 'blogIndex',
  components: {
    BlogList,
    Header
  }
}
</script>

<style lang="less" scoped>
#blogIndex {
  // width:100vw;
  // height: 100vh;
  width: 100%;
  height: 100%;
  padding: 15px 0 50px;
  .video {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
