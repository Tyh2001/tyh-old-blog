<template>
      <div
        id="settingIndex"
        :style="
          theme
            ? 'background: #0d1117;'
            : 'background: #faf8ff;'
        "
      >
    <HeaderInfo/>

    <!-- 表单 -->
    <UserForm />
  </div>
</template>

<script>
import { mapState } from 'vuex' // 映射 vuex
import UserForm from './components/UserForm'
import HeaderInfo from './components/HeaderInfo'
export default {
  name: 'settingIndex',
  components: {
    UserForm,
    HeaderInfo
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  }
}
</script>

<style lang="less" scoped>
#settingIndex {
  width: 650px;
  padding: 20px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 3px;
}

</style>
