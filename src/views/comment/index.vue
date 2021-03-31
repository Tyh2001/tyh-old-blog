<template>
  <div>
    <!-- 最上方背景图 -->
    <div class="topBackground"></div>

    <!-- 评论内容框 -->
    <div id="comment-list">
      <div class="comment-all">
        <!-- 留言框 -->
        <h2>留言</h2>
        <el-input
          type="textarea"
          v-model="comment"
        />

        <!-- 瀑布流 -->
        <div class="comment-item">
          <div
            class="item"
            v-for="(commentList, index) in commentLists"
            :key="index"
          >
            <!-- 留言卡片 -->
            <at-card
              :style="{ 'background-image': 'url(' + commentList.backgroundImg + ')'}"
            >
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

    <div class="footer">
      这是页脚内容
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
  name: 'commentIndex',
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
  // 文本框
  .el-textarea {
    max-width: 500px;
    /deep/ .el-textarea__inner {
      height: 90px;
    }
  }
  // 整个下方内容
  .comment-all {
    padding-top: 50px;
    margin: 0 auto;
    width: 980px;
    // 瀑布流菜单
    .comment-item {
      margin: 40px auto;
      width: 980px;
      column-count: 4;
      .item {
        margin-top: 20px;
        width: 240px;
        display: inline-block;
        z-index: 10;
        .at-card {
          width: 100%;
          cursor: pointer;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
      .item:hover {
        z-index: 200;
        transition: 0.25s;
        transform: scale(1.13);
      }
    }
  }
  @media (max-width: 1100px) {
    .comment-all {
      width: 740px;
      .comment-item {
        width: 740px;
        column-count: 3;
      }
    }
  }
  @media (max-width: 900px) {
    .comment-all {
      width: 500px;
      .comment-item {
        width: 500px;
        column-count: 2;
      }
    }
  }
  @media (max-width: 630px) {
    .comment-all {
      width: 240px;
      .comment-item {
        width: 240px;
        column-count: 1;
      }
    }
  }
}
// 页脚
.footer {
  width: 100%;
  height: 200px;
  margin-top: 120px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
