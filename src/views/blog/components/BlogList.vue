<template>
  <!-- <div
    id="BlogList"
    :style="theme
      ? 'background: #0d1117;color: #c9d1d9;'
      : 'background: #eceff1;color: #32373c;'
    "
  > -->
  <div id="BlogList">
    <div
      v-for="(list, index) in blogList"
      :key="index"
    >
      <p>{{ list.content }}</p>
      <div class="imageBox">
        <el-image
          class="blogImg"
          v-for="(img, index) in list.images"
          :key="index"
          :src="img"
          fit="cover"
          :preview-src-list="list.images"
        />
      </div>
      <el-button
        type="danger"
        @click="deleteList(index)"
      >
        删除
      </el-button>
    </div>
  </div>
</template>

<script>
// 获取博客列表数控
import { getBlogList } from '@/api/list'
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'BlogList',
  data () {
    return {
      blogList: []
    }
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
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
    // 删除
    deleteList (index) {
      this.blogList.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
#BlogList {
  padding: 20px;
}
// 图片盒子
.imageBox {
  width: 612px;
  .blogImg {
    width: 200px;
    height: 140px;
    border-radius: 3px;
    margin: 2px;
  }
}
</style>
