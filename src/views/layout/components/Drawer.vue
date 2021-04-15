<template>
  <div id="Drawer">
    <!-- 关于我弹出的抽屉 -->
    <!-- 我的头像 -->
    <div class="muPhoto-Bpx"></div>

    <h1 class="MyUserName">俱往矣i</h1>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
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
#Drawer {
  .muPhoto-Bpx {
    width: 100px;
    height: 100px;
    background: url('http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcQy2B2YFlT1RLRHihM9ad7lpFJGoQQE5khd*kn0j*bnbIzPkplEqpg*mdY5SN4ozH*eweuL31n36RYREYa561J4!/r') no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: auto;
  }
  // 我的昵称
  .MyUserName {
    margin-top: 10px;
    text-align: center;
    color: rgb(35, 40, 45);
  }
}
</style>
