<template>
  <div id="FooterList">
    ——
    <img src="../../public/上方小图标.png">
    此网站 2021-2-28 22:22 发布上线 Tyh.
    ——
  </div>
</template>

<script>
export default {
  name: 'FooterList',
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

<style lang='less' scoped>
// 页脚
#FooterList {
  width: 100%;
  border-top: 1px solid #dfdfdf;
  height: 230px;
  color: #0073bb;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eceff1;
  img {
    width: 20px;
    margin:0 6px 0 6px;
  }
}
</style>
