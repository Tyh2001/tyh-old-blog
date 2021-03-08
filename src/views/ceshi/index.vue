<template>
  <div id="ceshi">
    <mavon-editor v-model="value"/>
  </div>
</template>
<script>
import { getVueDoc } from '@/api/list'
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
export default {
  name: 'ceshiIndex',
  data () {
    return {
      value: ''
    }
  },
  created () {
    this.loadgetVueDoc()
  },
  methods: {
    async loadgetVueDoc () {
      const { data } = await getVueDoc()
      this.value = data.data.vue.document
    }
  }
}
</script>

<style lang="less" scoped>
#ceshi {
  // background: #fff;
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
