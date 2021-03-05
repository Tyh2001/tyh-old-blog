<template>
  <div
    id="blogIndex"
    :style="theme
      ? 'background: #0d1117;color: #c9d1d9;'
      : 'background: #eceff1;color: #32373c;'
    "
  >
    <!-- <h3>我的动态页面 - 后续开发。。。</h3> -->
    <div
      v-for="(list, index) in blogList"
      :key="index"
    >
      <p>{{ list.content }}</p>
      <div style="width: 600px">
        <img
          width="200px"
          v-for="(img, index) in list.images"
          :key="index"
          :src="img"
        >
      </div>
      <br>
      <el-button
        type="danger"
        @click="deleteList(index)"
      >
        删除
      </el-button>
      <hr>
    </div>
  </div>
</template>

<script>
import { getBlogList } from '@/api/list'
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'blogIndex',
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
      console.log(data)
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
#blogIndex {
  width: 100%;
  // height: 200px;
}
</style>
