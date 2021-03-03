<template>
  <div
    id="blogIndex"
    :style="theme
      ? 'background: #0d1117;color: #c9d1d9;'
      : 'background: #eceff1;color: #32373c;'
    "
  >
    <h3>我的动态页面 - 后续开发。。。</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'blogIndex',
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  }
}
</script>

<style lang="less" scoped>
#blogIndex {
  width: 100%;
  height: 200px;
}
</style>
