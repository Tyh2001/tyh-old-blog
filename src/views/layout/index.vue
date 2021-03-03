<template>
  <div id="layoutIndex">
    <!-- 顶部导航栏 -->
    <div class="navigationBar">
      <div class="myName" @click="$router.push('/')">
        <span class="name1">Tyh.</span>
      </div>

      <!-- 导航列表 -->
      <ul>
        <li @click="$router.push('/')">首页</li>
        <li @click="$router.push('/blog')">我的动态</li>
        <li>测试测试</li>
        <li>测试测试</li>
      </ul>

      <!-- 关于我 -->
      <div class="aboutMe">

        <!-- 黑暗主题开关 -->
        <el-switch
          v-model="theme"
          active-color="#6e40c9"
          inactive-color="#58b0fb"
          divided
          @change="swithcChange"
        />

        <!-- 下拉菜单 -->
        <el-dropdown trigger="click" v-if="userInfo">
          <span class="el-dropdown-link">
            <img
              class="photo"
              :src="userInfo.userPhoto"
            >
            <span class="username">
              {{ userInfo.name }}
            </span>
            <i class="el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>空</el-dropdown-item>
            <el-dropdown-item>空</el-dropdown-item>
            <el-dropdown-item>空</el-dropdown-item>
            <el-dropdown-item
              @click.native="outLogin"
            >
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <span
          class="pleaseOnLogin"
          v-else
          @click="$router.push('login')"
        >
          请登录
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data () {
    return {
      // theme: true // 开关状态
      theme: this.$store.state.theme, // 开关状态
      userInfo: this.$store.state.userInfo
    }
  },
  methods: {
    // 改变主题背景
    swithcChange () {
      this.$store.commit('changeTheme', this.theme)
    },
    // 退出登录
    outLogin () {
      this.$confirm('退出账号部分功能将不能使用，确定退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 退出后删除本地存储
        window.localStorage.removeItem('userInfo')
        this.$router.go(0)
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      })
    }
  }
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
      color: rgb(255,130,0);
    }
  }
  // 右边下拉菜单
  .aboutMe {
    cursor: pointer;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-switch {
      margin-right: 20px;
    }
    .el-dropdown-link {
      color: #dfdfdf;
      display: flex;
      justify-content: center;
      align-items: center;
      .photo {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-right: 6px;
      }
      // 用户昵称
      .username {
        color: #dfdfdf;
        font-size: 12px;
      }
    }
    .pleaseOnLogin {
      color: #dfdfdf;
    }
  }
}
@media screen and (max-width: 640px) {
  li {
    display: none;
  }
}
</style>
