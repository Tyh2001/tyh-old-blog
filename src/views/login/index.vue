<template>
  <div id="loginIndex">
    <div class="photo">
      <img
        src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcQy2B2YFlT1RLRHihM9ad7lpFJGoQQE5khd*kn0j*bnbIzPkplEqpg*mdY5SN4ozH.WlbL0Nrtw5DOpFddNOqa0!/r"
        @click="$router.push('/')"
      >
    </div>

    <p class="Welcome">Welcome to my website.</p>

    <!-- 登录框 -->
    <div class="loginBox">
      <!-- 账号 -->
      <p class="title">用户名或账号</p>
      <el-input
        v-model="user.userName"
        size="small"
        clearable
      />

      <!-- 密码 -->
      <p class="title">密码</p>
      <el-input
        v-model="user.userPassword"
        size="small"
        type="password"
        clearable
      />

      <el-button
        type="success"
        size="small"
        :loading="loading"
        @click="subonLogin"
      >
        登入
      </el-button>
    </div>

    <!-- 注册 -->
    <div
      class="registerBox"
    >
      <p>没有账号？</p>
      <p
        class="addNumber"
        @click="onRegister"
      >
        创建一个账户
      </p>
    </div>

    <p
      class="goHome"
      @click="$router.push('/')"
    >
      返回首页
    </p>
  </div>
</template>

<script>
import { onLogin } from '@/api/user'
export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        userName: 'ceshi1234',
        userPassword: '12345678'
      },
      loading: false // 按钮 loading
    }
  },
  methods: {
    // 登录
    async subonLogin () {
      this.loading = true
      const { data } = await onLogin()
      const name = this.user.userName
      const pass = this.user.userPassword

      if (data.user1.userName === name && data.user1.userPassword === pass) {
        const userInfo1 = data.user1
        this.$message({
          message: '游客登录成功',
          type: 'success'
        })

        // 登录成功后保留用户信息
        this.$store.commit('changeUserInfo', userInfo1)
        this.$router.push('/')
      } else if (data.user2.userName === name && data.user2.userPassword === pass) {
        const userInfo2 = data.user2
        this.$message({
          message: '登录成功',
          type: 'success'
        })

        // 登录成功后保留用户信息
        this.$store.commit('changeUserInfo', userInfo2)
        this.$router.push('/')
      } else {
        this.$message.error('登录失败，账号或密码错误')
      }

      this.loading = false
    },
    // 注册
    onRegister () {
      this.$message('注册功能暂时不能使用！')
    }
  }
}
</script>

<style lang="less" scoped>
#loginIndex {
  width: 400px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3), 0 0 7px 2px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 4px;
}
.photo {
  width: 50px;
  margin: auto;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid rgba(216, 216, 216, 0.4);
    cursor: pointer;
  }
}
// 欢迎
.Welcome {
  text-align: center;
  color: #24292e;
  font-size: 20px;
  margin: 20px 0 20px 0;
}
// 登录盒子
.loginBox {
  width: 100%;
  background: #f6f8fa;
  border: 1px solid #eaecef;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  // 描述文字
  .title {
    font-size: 13px;
    font-weight: 600;
    color: #24292e;
    margin-bottom: 3px;
  }
  .el-input {
    margin-bottom: 14px;
  }
  // 登录按钮
  .el-button {
    width: 100%;
    background: #2ea44f;
  }
}
// 注册盒子
.registerBox {
  width: 100%;
  height: 40px;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  margin: 24px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  .addNumber {
    color: #0366d6;
  }
}
// 返回首页
.goHome {
  font-size: 14px;
  color: #0366d6;
  float: right;
  cursor: pointer;
}
</style>
