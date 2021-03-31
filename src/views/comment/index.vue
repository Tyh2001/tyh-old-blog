<template>
  <div>
    <!-- 最上方背景图 -->
    <div class="topBackground"></div>

    <!-- 评论内容框 -->
    <div id="comment-list">
      <!-- 留言框 -->
      <h2>留言</h2>
      <el-input
        type="textarea"
        v-model="comment"
      />
      <div class="commit-all">

        <div
          class="item"
          v-for="(commentList, index) in commentLists"
          :key="index"
        >
          <at-card>
            <h4 slot="title">{{ commentList.time }}</h4>
            <div slot="extra">{{ commentList.username }}</div>
            <div>
              {{ commentList.comment }}
            </div>
          </at-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 获取评论留言列表
import { getCommitList } from '@/api/article'
import Vue from 'vue'
// 引入 at-ui 组件
import { Card } from 'at-ui'
Vue.use(Card)
export default {
  name: 'squareIndex',
  components: {},
  props: {},
  data () {
    return {
      commentLists: [], // 评论留言列表
      comment: '' // 评论内容
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadgetCommitList() // 获取评论留言列表
  },
  mounted () {},
  methods: {
    // 获取评论留言列表
    async loadgetCommitList () {
      const { data } = await getCommitList()
      this.commentLists = data.commentList
    }
  }
}
</script>

<style lang='less' scoped>
// 最上方背景图
.topBackground {
  width: 100%;
  height: 260px;
  background: url("./images/4dvzl4.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}
// 评论内容列表
#comment-list {
  width: 100%;
  border-top-right-radius: 40px;
  margin-top: -40px;
  background: #fff;
  padding: 80px 100px 0 100px;
  // 文本框
  .el-textarea {
    // width: 500px;
    /deep/ .el-textarea__inner {
      height: 90px;
    }
  }
  // 瀑布流菜单
  .commit-all {
    margin: 0 auto;
    width: 980px;
    column-count: 4;
    .item {
      width: 240px;
      padding: 15px 6px 0 0;
      display: inline-block;
      .at-card {
        width: 100%;
        color: #fff;
        background: url('./images/4dvzl4.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        h4 {
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .commit-all {
      width: 740px;
      column-count: 3;
    }
  }
  @media (max-width: 900px) {
    .commit-all {
      width: 500px;
      column-count: 2;
    }
  }
  @media (max-width: 630px) {
    .commit-all {
      width: 260px;
      column-count: 1;
    }
  }
}
</style>
