<template>
  <div id="BottomList">

    <!-- 第一段内容 -->
    <div class="content1">
      <div class="listC1">“ 慢慢来吧 谁都有努力的过程 ”</div>
      <div class="listE1">“ man man lai ba shei dou you nu li de guo cheng ”</div>
      <img class="image1" src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1Wn8LQ8L7IVMuua*LlMq7yHuu6mKZBpXmmaS1ETexiFkjx3dIJt7dMUgYPezer2UMg!/r">
    </div>

    <!-- 第二段内容 -->
    <div class="content2">
      <div class="text">
        <div class="listC2">“ 我们在很久很久以前 就没有以后了 ”</div>
        <div class="listE2">“ wo men zai hen jiu hen jiu yi qian jiu mei you yi hou le ”</div>
      </div>
      <img class="image2" src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1UCYxNno0ntbLq9bxHtzwI9rCc.1BaitjaxqnbIC3gnXaOJBMDcAjmUyxATfBlTNPs!/r">
    </div>

    <!-- 第三段内容 -->
    <div class="content3">
      <img class="image3" src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1V2jp9MjMDCrmmRsE3MBuRdxDTthIySfocYA4zWVEvk5FmYrzz4ugotqg0.0OVFcfM!/r">
      <div class="text">
        <div class="listC3">“ 愿我最爱的人 也最爱我 ”</div>
        <div class="listE3">“ yuan wo zui ai de ren ye zui ai wo ”</div>
      </div>
    </div>

    <!-- 第四段内容 -->
    <div class="content4">
      <div class="text">
        <p class="listC4">“ 最怕你一生碌碌无为，还安慰自己平凡可贵 ”</p>
        <p class="listE4">“ zui pa ni yi sheng lu lu wu wei, hai an wei zi ji ping fan ke gui ”</p>
      </div>
      <div class="imgBox">
        <img class="image4" src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1XYrM3BWXZluTuyuPHd5ArS2is91J4.xP5s60KfihPoutaY87db.B7o5qKYNwqeyfw!/r" alt="">
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <p>—— 此网站 2021-2-28 22:22 发布上线 — Tyh. ——</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BottomList'
}
</script>

<style lang="less" scoped>
// 底部部分
#BottomList {
  width: 100%;
  margin-top: 550px;
  background-color: #eceff1;
  overflow-x: hidden;
  user-select: none;
}
// 第一段内容
.content1 {
  .listC1 {
    font-size: 25px;
    font-weight: 600;
    color: #c4614c;
    padding-top: 70px;
    margin-left: 50px;
  }
  .listE1 {
    color: #c4614c;
    margin: 43px 0px 30px 60px;
  }
  .image1 {
    width: 100%;
  }
}
// 第二段内容
.content2 {
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .text {
    .listC2 {
      font-size: 25px;
      font-weight: 600;
      color: #64cffa;
      margin: 90px 20px 0 50px;
    }
    .listE2 {
      color: #64cffa;
      margin: 43px 0px 30px 60px;
    }
  }
  .image2 {
    width: 400px;
  }
}
// 第三段内容
.content3 {
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  .image3 {
    width: 400px;
  }
  .text {
    .listC3 {
      font-size: 25px;
      font-weight: 600;
      color: orange;
      margin: 90px 0 0 -90px;
    }
    .listE3 {
      color: orange;
      margin: 43px 0 0 0px;
    }
  }
}
// 第四段内容
.content4 {
  margin-top: 100px;
  .text {
    text-align: center;
    .listC4 {
      font-size: 25px;
      font-weight: 600;
      color: #23282d;
      margin: 90px 20px 0 50px;
    }
    .listE4 {
      color: #23282d;
      margin: 43px 0px 30px 60px;
    }
  }
  .imgBox {
    width: 800px;
    margin: auto;
    .image4 {
      width: 800px;
    }
  }
}
// 页脚
.footer {
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid #dfdfdf;
  height: 230px;
  background: #f7f7f7;
  color: #0073bb;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
