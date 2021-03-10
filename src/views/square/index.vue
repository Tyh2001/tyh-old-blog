<template>
  <div id="squareIndex">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
        <img height="150px" src="https://pic.netbian.com/uploads/allimg/201207/233833-1607355513cbea.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
#squareIndex {
  background: #fff;
}
</style>
