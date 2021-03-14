<template>
  <div id="squareIndex">
    <button @click="Time()">开始</button>
    <el-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="speed"
    />
    <audio controls>
      <source src="./music/下山 - 要不要买菜.mp3" type="audio/mpeg">
    </audio>
    <audio controls>
      <source src="./music/芊芊 (女生版) - 玄觞.mp3" type="audio/mpeg">
    </audio>
    <audio controls>
      <source src="./music/说客 - 音阙诗听 _ 新乐尘符.flac" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      speed: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // x * 100 = 235000
    Time: function () {
      setInterval(() => {
        if (this.speed < 100) {
          this.speed++
        }
      }, 2350)
    }
  }
}
</script>

<style scoped lang="less">
#squareIndex {
  height: 500px;
  background: #fff;
}
</style>
