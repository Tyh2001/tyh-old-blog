<template>
  <div id="articleIndex">
    <el-tabs type="border-card">
      <!-- Vue相关 -->
      <el-tab-pane label="Vue相关">
        <el-collapse>
          <el-collapse-item title="vue教程1" name="1">
            暂无内容
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

      <!-- JS 相关 -->
      <el-tab-pane label="JS相关">
        <el-collapse>
          <el-collapse-item title="JS教程1" name="1">
            暂无内容
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

      <!-- 其他技术 -->
      <el-tab-pane label="其他技术">
        <el-collapse>
          <el-collapse-item
            v-for="(otherDoc, index) in otherDocs"
            :key="index"
            :title="otherDoc.title"
            :name="index + 1"
          >
            <p>更新时间：{{otherDoc.time }}</p>
            <mavon-editor v-model="otherDoc.content"/>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>

    <el-backtop>
      <i class="tyh tyh-huojian" />
    </el-backtop>
  </div>
</template>
<script>
// 获取笔记内容
import { getOtherDoc } from '@/api/article'
import Vue from 'vue'
// 引入富文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 映射 vuex
import { mapState } from 'vuex'
Vue.use(mavonEditor)
export default {
  name: 'articleIndex',
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
  data () {
    return {
      otherDocs: {} // 获取其他技术文章
    }
  },
  created () {
    this.loadgetOtherDoc() // 获取其他技术文章
  },
  methods: {
    // 获取其他技术文章
    async loadgetOtherDoc () {
      const { data } = await getOtherDoc()
      this.otherDocs = data.data
    }
  }
}
</script>

<style lang="less" scoped>
#articleIndex {
  margin-top: 15px;
  padding-bottom: 50px;
}
.el-tabs {
  width: 800px;
  margin: auto;
}
// 下下面为富文本编辑器需要移除的样式
/deep/ .v-note-edit,
/deep/ .v-note-op {
  display: none !important;
}
// 整个大盒子的宽度
.v-note-wrapper {
  width: 800px;
  margin: auto;
  z-index: 500;
}
/deep/ .v-note-show {
  flex: 1 !important;
}
</style>
