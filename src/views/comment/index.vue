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
            v-model="commentList.comment"
          />
          <div class="switchBox">
            <!-- 添加图片和表情的选项 -->
            <div>
              <!-- 添加图片 -->
              <i
                class="tyh tyh-tupian"
                @click="$refs['upImg-Inp'].click()"
              />
              <!-- 上传图片的文本框 -->
              <input
                ref="upImg-Inp"
                type="file"
                accept="image/*"
                hidden
                @change="fileChange"
              />

              <!-- 添加表情 -->
              <i class="tyh tyh-biaoqing" />
            </div>
            <at-button
              type="primary"
              size="small"
              @click="addtoCom"
            >
              发布
            </at-button>
          </div>

          <!-- 选择展示的图片 -->
          <img width="300px" :src="commentList.backgroundImg" alt="">
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
import Vue from 'vue'
// 页脚组件
import FooterList from '@/components/FooterList'
// 映射 vuex
import { mapState } from 'vuex'
// 获取评论留言列表
import { getCommitList } from '@/api/article'
// 引入 at-ui 组件
import { Card, Button, Message } from 'at-ui'
// 本地存储方法
import { getStorage } from '@/utils/storage'
Vue.use(Card)
Vue.use(Button)
export default {
  name: 'commentIndex',
  components: {
    FooterList
  },
  props: {},
  data () {
    const time = new Date() // 获取当前时间
    const year = time.getFullYear() // 获取年份
    const month = time.getMonth() + 1 // 获取月份
    const day = time.getDate() // 获取日
    const hour = time.getHours() // 获取小时
    const minute = time.getMinutes() // 获取分钟
    return {
      commentLists: [], // 评论留言列表
      // 评论内容列表
      commentList: {
        backgroundImg: '', // 背景图
        comment: '', // 评论内容
        time: `${year}-${month}-${day} ${hour}:${minute}`, // 发布时间
        username: getStorage('userInfo').name // 用户昵称
      },
      blobPicture: '' // 需要上传的图片编码
    }
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme', 'userInfo'])
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
    },
    // 添加新的留言
    addtoCom () {
      // 如果有内容 就执行发布操作
      if (this.commentList.comment !== '') {
        const backgroundImg = this.commentList.backgroundImg
        const comment = this.commentList.comment
        const time = this.commentList.time
        const username = this.commentList.username

        const res = {
          backgroundImg,
          comment,
          time,
          username
        }

        // 将新的内容添加到的数组的首个
        this.commentLists.unshift(res)

        // 发布完成之后清除图片地址和文字内容
        this.commentList.backgroundImg = ''
        this.commentList.comment = ''
        Message.success({
          message: '评论成功',
          duration: 1000
        })
      } else {
        // 否则弹出提示框
        Message.error({
          message: '内容为空不能发布',
          duration: 1000
        })
      }
    },
    // 当选择上传的图片之后
    fileChange () {
      const file = this.$refs['upImg-Inp']
      const blob = window.URL.createObjectURL(file.files[0])
      this.commentList.backgroundImg = blob
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
          color: #fff;
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
</style>
