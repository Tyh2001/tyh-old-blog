<template>
  <div id="AboutMe">
    <!-- 关于我 -->
    <div class="aboutMe">

      <!-- 下拉菜单 -->
      <el-dropdown
        v-if="userInfo !== null"
        :hide-on-click="false"
      >
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
          <!-- 主题颜色 -->
          <el-dropdown-item>
            主题
            <i :class="theme ? 'el-icon-moon' : 'el-icon-sunny'" />
            <el-switch
              v-model="theme"
              active-color="#6e40c9"
              inactive-color="#58b0fb"
              divided
              @change="swithcChange"
            />
          </el-dropdown-item>

          <!-- 关于我 -->
          <el-dropdown-item
            @click.native="drawerShow = true"
          >
            About me
          </el-dropdown-item>

          <!-- 设置 -->
          <el-dropdown-item
            @click.native="$router.push('/setting')"
          >
            设置
          </el-dropdown-item>

          <!-- 退出登录 -->
          <el-dropdown-item
            @click.native="outLogin"
            style="color: rgb(245, 108, 108)"
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
        <i class="el-icon-user" />
        请登录
      </span>
    </div>

    <!-- 关于我的抽屉 -->
    <el-drawer
      :visible.sync="drawerShow"
      direction="ltr"
      :append-to-body="true"
      :modal-append-to-body="false"
    >
      <!-- 我的头像 -->
      <div class="muPhoto-Bpx"></div>

      <h1 class="MyUserName">俱往矣i</h1>

      <!-- 个性签名 -->
      <p class="autograph">最怕你一生碌碌无为，还安慰自己平凡可贵。</p>
    </el-drawer>
  </div>
</template>

<script>
import { Message } from 'at-ui'
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'AboutMe',
  components: {},
  computed: {
    ...mapState(['userInfo']) // 用户信息
  },
  data () {
    return {
      theme: this.$store.state.theme, // 主题状态
      drawerShow: false // 关于我的抽屉展示
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
        this.$store.commit('changeUserInfo', null)
        Message.success({
          message: '退出登录成功！',
          duration: 900
        })
        this.$router.push('/')
      }).catch(() => {})
    }
  }
}
</script>

<style lang="less" scoped>
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
      display: inline-block;
      min-width: 45px;
    }
  }
  .pleaseOnLogin {
    font-size: 15px;
    color: #dfdfdf;
  }
}
.el-drawer {
  .muPhoto-Bpx {
    width: 100px;
    height: 100px;
    background: url('http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcQy2B2YFlT1RLRHihM9ad7lpFJGoQQE5khd*kn0j*bnbIzPkplEqpg*mdY5SN4ozH*eweuL31n36RYREYa561J4!/r') no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: auto;
  }
  // 我的昵称
  .MyUserName {
    margin-top: 10px;
    text-align: center;
    color: rgb(35, 40, 45);
  }
  // 个性签名
  .autograph {
    margin-top: 10px;
    text-align: center;
  }
}
</style>
