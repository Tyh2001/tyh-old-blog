<template>
  <div id="commentIndex">
    <!-- 最上方背景图 -->
    <div class="topBackground"></div>

    <!-- 评论内容框 -->
    <div
      id="comment-list"
      :style="theme ? 'background: #0d1117;' : 'background: #eceff1;'"
    >
      <div class="comment-all">
        <!-- 留言框 -->
        <h2>留言</h2>
        <div class="inputBox">
          <el-input
            type="textarea"
            v-model="comment"
          />
          <div class="switchBox">
            <div>
              <i class="tyh tyh-tupian" />
              <i class="tyh tyh-biaoqing" />
            </div>
            <at-button
              type="primary"
              size="small"
            >发布</at-button>
          </div>
        </div>

        <!-- 瀑布流 -->
        <div class="comment-item">
          <div
            class="item"
            v-for="(commentList, index) in commentLists"
            :key="index"
          >
            <!-- 留言卡片 -->
            <at-card
              no-hover
              :style="{
                'background-image': 'url(' + commentList.backgroundImg + ')'
              }"
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

    <FooterList />
  </div>
</template>

<script>
// 页脚组件
import FooterList from '@/components/FooterList'
import { mapState } from 'vuex' // 映射 vuex
// 获取评论留言列表
import { getCommitList } from '@/api/article'
import Vue from 'vue'
// 引入 at-ui 组件
import { Card, Button } from 'at-ui'
Vue.use(Card)
Vue.use(Button)
export default {
  name: 'commentIndex',
  components: {
    FooterList
  },
  props: {},
  data () {
    return {
      commentLists: [], // 评论留言列表
      comment: '' // 评论内容
    }
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
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
  padding-bottom: 70px;
  // 文本框
  .inputBox {
    max-width: 500px;
    .el-textarea {
      width: 100%;
      /deep/ .el-textarea__inner {
        height: 90px;
      }
    }
    // 操作按钮
    .switchBox {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 24px;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  }
  // 整个下方内容
  .comment-all {
    width: 980px;
    padding-top: 50px;
    margin: 0 auto;
    // 瀑布流菜单
    .comment-item {
      margin: 0 auto;
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
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
