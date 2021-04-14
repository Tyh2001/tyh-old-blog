<template>
  <div id="articleIndex">

    <!-- <TopImage /> -->

    <el-tabs type="border-card">
      <!-- Vue相关 -->
      <el-tab-pane label="Vue相关">
        <el-collapse>
          <el-collapse-item
            v-for="(vueDoc, index) in vueDocs"
            :key="index"
            :title="vueDoc.title"
            :name="index + 1"
          >
            <p class="changeTime">发布时间：{{vueDoc.time }}</p>
            <mavon-editor v-model="vueDoc.content"/>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>

      <!-- JS 相关 -->
      <el-tab-pane label="JS相关">
        <el-collapse>
          <el-collapse-item
            v-for="(jsDoc, index) in jsDocs"
            :key="index"
            :title="jsDoc.title"
            :name="index + 1"
          >
            <p class="changeTime">发布时间：{{jsDoc.time }}</p>
            <mavon-editor v-model="jsDoc.content"/>
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
            <p class="changeTime">发布时间：{{otherDoc.time }}</p>
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
// 获取技术文章内
import { getVueDoc, getJsDoc, getOtherDoc } from '@/api/article'
import Vue from 'vue'
// 引入富文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 映射 vuex
import { mapState } from 'vuex'
// import TopImage from './components/TopImage'
Vue.use(mavonEditor)
export default {
  name: 'articleIndex',
  components: {
    // TopImage
  },
  data () {
    return {
      vueDocs: {}, // 获取Vue技术文章
      jsDocs: {}, // 获取Js技术文章
      otherDocs: {} // 获取其他技术文章
    }
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
  created () {
    this.loadgetVueDoc() // 获取Vue技术文章
    this.loadgetgetJsDoc() // 获取Js技术文章
    this.loadgetOtherDoc() // 获取其他技术文章
  },
  methods: {
    // 获取Vue技术文章
    async loadgetVueDoc () {
      const { data } = await getVueDoc()
      this.vueDocs = data.data
    },
    // 获取Js技术文章
    async loadgetgetJsDoc () {
      const { data } = await getJsDoc()
      this.jsDocs = data.data
    },
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
  padding-bottom: 50px;
  .changeTime {
    color: rgb(151, 151, 151);
    margin: 20px 0 30px 0;
  }
}
.el-tabs {
  width: 800px;
  margin: auto;
  margin-top: 20px;
}
/deep/ .el-collapse-item__header {
  font-size: 15px;
}
// 下下面为富文本编辑器需要移除的样式
/deep/ .v-note-edit,
/deep/ .v-note-op {
  display: none !important;
}
// 整个大盒子的宽度
.v-note-wrapper {
  width: 780px;
  margin: auto;
  z-index: 500;
}
/deep/ .v-note-show {
  flex: 1 !important;
}
</style>
