<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="navigationBar">
      <div class="myName" @click="$router.push('/')">
        <span class="name1">Tyh.</span>
        &nbsp;&nbsp;
        <span class="name2">俱往矣i</span>
      </div>

      <!-- 导航列表 -->
      <ul>
        <li @click="$router.push('/')">首页</li>
        <li @click="$router.push('/dynamic')">我的动态</li>
        <li>测试测试</li>
        <li>测试测试</li>
      </ul>

      <!-- 关于我 -->
      <div class="aboutMe">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            关于我
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="text-decoration: none">
            <el-dropdown-item>
              <a style="text-decoration: none" href="https://gitee.com/tyh666999">Gitee</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a style="text-decoration: none" href="https://gitee.com/tyh666999">Github</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a style="text-decoration: none" href="https://music.163.com/#/song?id=1487210999">网易云音乐</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'layoutIndex'
}
</script>

<style lang="less" scoped>
.navigationBar {
  width: 100%;
  height: 70px;
  background: #23282d;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #dfdfdf;
  // 我的的名字
  .myName {
    cursor: pointer;
    display: inline-block;
    margin-left: 40px;
    .name1 {
      font-size: 30px;
      font-weight: 600;
    }
    .name2 {
      font-size: 18px;
    }
  }
  .myName:hover {
    color: skyblue;
  }
  // 导航菜单
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 40px;
      cursor: pointer;
    }
    li:hover {
      color: chocolate;
    }
  }
  // 关于我
  .aboutMe {
    cursor: pointer;
    margin-right: 40px;
    .el-dropdown-link {
      color: #dfdfdf;
    }
  }
}
</style>
