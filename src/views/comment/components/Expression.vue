<template>
  <div id="Expression">
    <ul>
      <li
        v-for="(Expression, index) in ExpressionList"
        :key="index"
        :alt="Expression.code"
        :title="Expression.title"
        @click="$emit('addCode', Expression.code, index)"
      >
        <img :src="Expression.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
// 获取表情列表
import { getExpressionList } from '@/api/Expression'
export default {
  name: 'Expression',
  components: {},
  props: {},
  data () {
    return {
      ExpressionList: [] // 表情列表
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadgetExpressionList() // 获取表情发布列表
  },
  mounted () {},
  methods: {
    // 获取表情发布列表
    async loadgetExpressionList () {
      const { data } = await getExpressionList()
      this.ExpressionList = data.data.List
    }
  }
}
</script>

<style lang='less' scoped>
#Expression {
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 60px;
      height: 60px;
      cursor: pointer;
      user-select: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
    }
    li:hover {
      background-color: #f3f3f3;
    }
  }
}
</style>
