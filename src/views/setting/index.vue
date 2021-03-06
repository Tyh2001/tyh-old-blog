<template>
  <div
    id="settingIndex"
    :style="theme ? 'background: #0d1117;' : 'background: #eceff1;'"
  >
    <div class="info">
      <UserInfo />
    </div>

    <div class="userPhoto">
      <img
        class="userImg"
        src="https://wx1.sinaimg.cn/large/007LmPOmly1go95lrt7nrj30m30m3n5c.jpg"
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex' // 映射 vuex
import UserInfo from './components/UserInfo'
export default {
  name: 'settingIndex',
  components: {
    UserInfo
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  }
}
</script>

<style lang="less" scoped>
#settingIndex {
  width: 750px;
  padding-top: 20px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  justify-content: space-around;
  // 用户头像
  .userPhoto {
    width: 200px;
    .userImg {
      width: 200px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  // 资料
  .info {
    width: 450px;
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>
