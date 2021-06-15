<template>
  <div
    id="settingIndex"
    :style="theme ? 'background: #0d1117;' : 'background: #faf8ff;'"
  >
    <!-- 头部描述 -->
    <div id="HeaderInfo">
      <img class="photo" :src="userInfo.userPhoto" />
      <div class="nameBox">
        <h2>{{ userInfo.name }}</h2>
        <p>您的基本账户信息</p>
      </div>
    </div>

    <ChangeInfo />

    <ChangePass />

    <!-- 其他操作 -->
    <el-divider content-position="left">其他操作</el-divider>
    <div class="userForm">
      <div class="info">
        <el-button
          type="primary"
          size="small"
          class="outLogin"
          @click="outLogin"
        >
          退出当前账号
        </el-button>
      </div>
      <div class="userPhoto" />
    </div>
  </div>
</template>

<script>
// 映射 vuex
import { mapState } from 'vuex'
import ChangeInfo from './components/ChangeInfo'
import ChangePass from './components/ChangePass'
export default {
  name: 'settingIndex',
  components: {
    ChangeInfo,
    ChangePass
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['userInfo', 'theme'])
  },
  created () { },
  methods: {
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
        this.$message.success({
          message: '退出登录成功！',
          duration: 900
        })
        this.$router.push('/')
      }).catch(() => { })
    }
  }
}
</script>

<style lang="" src="./style/index.less" scoped></style>
