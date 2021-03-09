<template>
  <div id="ceshi">
    <mavon-editor v-model="value"/>
    <el-backtop>
      <i class="tyh tyh-huojian" />
    </el-backtop>
  </div>
</template>
<script>
// 获取笔记内容
import { getVueDoc } from '@/api/list'
import Vue from 'vue'
// 引入富文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 映射 vuex
import { mapState } from 'vuex'
Vue.use(mavonEditor)
export default {
  name: 'ceshiIndex',
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
  data () {
    return {
      value: ''
    }
  },
  created () {
    this.loadgetVueDoc() // 获取文章数据
  },
  methods: {
    // 获取文章数据
    async loadgetVueDoc () {
      const { data } = await getVueDoc()
      this.value = data.data.vue.document
    }
  }
}
</script>

<style lang="less" scoped>
#ceshi {
  margin-top: 15px;
  padding-bottom: 50px;
}
img {
  height: 200px;
}
// 下下面为富文本编辑器需要移除的样式
/deep/ .v-note-edit,
/deep/ .v-note-op {
  display: none !important;
}
// 整个大盒子的宽度
.v-note-wrapper {
  width: 700px;
  margin: auto;
  z-index: 500;
}
/deep/ .v-note-show {
  flex: 1 !important;
}
</style>
