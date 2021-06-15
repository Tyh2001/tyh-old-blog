<template>
  <div id="FooterList">
    <div class="footer-data">
      <img
        class="Myphoto"
        src="https://www.hualigs.cn/image/608132a6c15b2.jpg"
      />
      <div class="MyList">
        <h1>Tyh.</h1>
        <p>此网站 2021-1-28 发布上线</p>
      </div>
    </div>
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
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
// 页脚
#FooterList {
  user-select: none;
  width: 100%;
  height: 230px;
  background: rgb(35, 40, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  // 我的资料
  .footer-data {
    width: 440px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .Myphoto {
      width: 60px;
      height: 60px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
    }
    .MyList {
      margin-left: 20px;
      h1 {
        color: #0073bb;
        font-size: 20px;
        font-weight: 800;
      }
      p {
        color: #0073bb;
        font-size: 18px;
      }
    }
  }
}
</style>
