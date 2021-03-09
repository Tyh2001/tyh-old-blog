<template>
  <div id="dataBox">
    <!-- 头像 -->
    <div class="img-box">
      <img
        class="userImg"
        src="https://wx1.sinaimg.cn/large/007LmPOmly1go95lrt7nrj30m30m3n5c.jpg"
      >
    </div>
    <p class="nickname">
      俱往矣i
      <i class="tyh tyh-nan" />
    </p>
    <p class="autograph">最怕你一生碌碌无为，还安慰自己平凡可贵。</p>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
#dataBox {
  width: 600px;
  height: 230px;
  user-select: none;
  background-image: url(http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcVnPDTSzVYfrLDVDwOT1M4LOj0vWoxKHxsaU*Pp69LIDJDUaeXYmFFzV7rtBbPyqbUwjx8VCOP7Vuyqeqc7JpmI!/r);
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 3px;
  // 我的头像
  .img-box {
    width: 108px;
    margin: 0 auto;
    // 资料卡的头像
    .userImg {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 30px;
      border: 4px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
    }
  }
  // 昵称
  .nickname {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin-top: 9px;
    .tyh-nan {
      font-size: 22px;
      color: rgb(0, 145, 255);
    }
  }
  // 个性签名
  .autograph {
    font-size: 14px;
    text-align: center;
    color: #fff;
    margin-top: 11px;
  }
}
</style>
