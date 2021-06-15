<template>
  <div id="BlogList">
    <div
      class="contentList"
      v-for="(list, index) in blogList"
      :key="index"
      :style="
        theme
          ? 'background: #0d1117; color: #c9d1d9;'
          : 'background: #faf8ff;color: #32373c;'
      "
    >
      <ListHeader :index="index" :blogList="blogList" />

      <!-- 发布内容 -->
      <p class="content">{{ list.content }}</p>
      <el-image
        lazy
        class="blogImg"
        v-for="(img, index) in list.images"
        :key="index"
        :src="img"
        fit="cover"
        :preview-src-list="list.images"
        :style="imgWidth(list.images.length)"
      />

      <!-- 点赞评论框 -->
      <div class="option">
        <div class="zan">
          <i class="tyh tyh-zan" />
          <span>25</span>
        </div>
        <div class="qipao">
          <i class="tyh tyh-qipao" />
          <span>41</span>
        </div>
      </div>

      <el-divider content-position="left">暂无评论内容</el-divider>
    </div>
  </div>
</template>

<script>
// 获取博客列表数控
import { getBlogList } from '@/api/article'
import { mapState } from 'vuex' // 映射 vuex
import ListHeader from './ListHeader'
export default {
  name: 'BlogList',
  components: {
    ListHeader
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
  data () {
    return {
      blogList: [] // 博客列表
    }
  },
  created () {
    this.loadgetBlogList() // 获取博客列表
  },
  methods: {
    // 获取博客列表
    async loadgetBlogList () {
      const { data } = await getBlogList()
      this.blogList = data.blog.list
    },
    // 图片宽度
    imgWidth (length) {
      if (length === 1) {
        return 'width: 100%; max-height: 500px'
      } else if (length === 2) {
        return 'width: 281px; max-height: 190px'
      } else if (length > 2) {
        return 'width: 186px; max-height: 140px;'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#BlogList {
  width: 600px;
  margin: auto;
  box-sizing: border-box;
}
.contentList {
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
  .content {
    font-size: 14px;
    margin-bottom: 10px;
  }
}
// 图片盒子
.blogImg {
  margin: 2px;
  border-radius: 3px;
}
// 点赞框
.option {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #857a99;
    cursor: pointer;
    i {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 17px;
    }
    i:hover {
      color: #ff890f;
      background: #fff2e5;
      border-radius: 50%;
    }
    span {
      font-size: 13px;
    }
  }
  .zan {
    margin-right: 15px;
  }
  .qipao {
    margin-right: 30px;
  }
}
// 分割线
.el-divider__text {
  background: #faf8ff;
  color: #32373c;
}
</style>
