<template>
  <div>
    <div id="HeaderInfo">
      <img class="photo" :src="userInfo.userPhoto">
      <div class="nameBox">
        <h2>{{ userInfo.name }}</h2>
        <p>您的基本账户信息</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'HeaderInfo',
  computed: {
    // 获取到 vuex 个人信息
    ...mapState(['userInfo'])
  }
}
</script>

<style lang="less" scoped>
#HeaderInfo {
  width: 100%;
  display: flex;
  align-items: center;
  .photo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .nameBox {
    margin-left: 10px;
  }
}
</style>
