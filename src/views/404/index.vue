<template>
  <div id="oh404">
    <h1 class="title">404</h1>
    <p class="errSay">This is not the web pagee you are looking for.</p>
    <p class="time">即将在 {{ time }} 秒后返回</p>
    <div class="back">
      <p
        class="returnHome"
        @click="$router.push('/')"
      >
        返回首页
      </p>
      <p
        class="return"
        @click="$router.back(-1)"
      >
        返回上一层
      </p>
    </div>
    <div class="footer">
      <img src="../../../public/上方小图标.png" alt="">
      Tyh.
    </div>
  </div>
</template>

<script>
export default {
  name: 'err',
  data () {
    return {
      time: 5
    }
  },
  mounted () {
    setInterval(() => {
      this.time--
      if (this.time === 0) {
        this.$router.back(-1)
      }
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
#oh404 {
  width: 100%;
  background-color: #eceff1;
  user-select: none;
}
.title {
  text-align: center;
  font-size: 99px;
  color: #23282d;
  padding-top: 60px;
}
.errSay {
  text-align: center;
  font-weight: 600;
}
.time {
  padding-top: 30px;
  text-align: center;
  color: #23282d;
}
.back {
  width: 300px;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  color: rgb(255,130,0);
  .returnHome,
  .return {
    cursor: pointer;
  }
}
.footer {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dfdfdf;
  background: #f7f7f7;
  color: #0073bb;
  img {
    width: 20px;
    margin-right: 6px;
  }
}
</style>
