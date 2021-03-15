<template>
  <div
    id="BottomList"
    :style="theme ? 'background: #0d1117;' : 'background: #eceff1;'"
  >
    <!-- 第一段内容 -->
    <div class="content1">
      <h1 class="listC1">“ 慢慢来吧，谁都有努力的过程。 ”</h1>
      <p class="listE1">" man man lai ba, shei dou you nu li de guo cheng. "</p>
      <img
        class="image1"
        src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1Wn8LQ8L7IVMuua*LlMq7yHuu6mKZBpXmmaS1ETexiFkjx3dIJt7dMUgYPezer2UMg!/r"
      >
    </div>

    <!-- 第二段内容 -->
    <div class="content">
      <div class="words">
        <h1 class="listC2">“ 我们在很久很久以前，就没有以后了 ”</h1>
        <p class="listE2">" wo men zai hen jiu hen jiu yi qian, jiu mei you yi hou le "</p>
      </div>
      <div class="picture">
        <img
          src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1UCYxNno0ntbLq9bxHtzwI9rCc.1BaitjaxqnbIC3gnXaOJBMDcAjmUyxATfBlTNPs!/r"
        >
      </div>
    </div>

    <!-- 第三段内容 -->
    <div class="content">
      <div class="picture">
        <img
          src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcYfg3ivNQUJOyEpgSEn4e1V2jp9MjMDCrmmRsE3MBuRdxDTthIySfocYA4zWVEvk5FmYrzz4ugotqg0.0OVFcfM!/r"
        >
      </div>
      <div class="words">
        <h1 class="listC3">“ 愿我最爱的人，也最爱我 ”</h1>
        <p class="listE3">" yuan wo zui ai de ren, ye zui ai wo "</p>
      </div>
    </div>

    <!-- 第四段内容 -->
    <div class="content">
      <div>
        <h1 class="listC4">“ 最怕你一生碌碌无为，还安慰自己平凡可贵 ”</h1>
        <p class="listE4">" zui pa ni yi sheng lu lu wu wei, hai an wei zi ji ping fan ke gui "</p>
        <img
          class="picture-4"
          src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcfnLIouOSdqNmrw8IdvbnZbonou3sEgQbHPgAm0peQ39SljnyFXpNNaSZQLkzIIvijBI*PoIyyILYeCHRj5RhWk!/r"
        >
      </div>
    </div>

    <!-- 页脚 -->
    <div
      class="footer"
      :style="theme ? 'background: #24282f;' : 'background: #f7f7f7;'"
    >
      ——
      <img src="../../../../public/上方小图标.png">
      此网站 2021-2-28 22:22 发布上线 Tyh.
      ——
    </div>

    <!-- 返回顶部 -->
    <el-backtop>
      <i class="tyh tyh-huojian" />
    </el-backtop>

  </div>
</template>

<script>
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'BottomList',
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  }
}
</script>

<style lang="less" scoped>
// 底部部分
#BottomList {
  width: 100%;
  margin-top: 550px;
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
// 第二三四段内容
.content {
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  // 文字
  .words {
    width: 50%;
    .listC2 {
      font-size: 25px;
      color: rgb(100, 207, 250);
      margin-top: 150px;
    }
    .listE2 {
      color: rgb(100, 207, 250);
      margin: 15px 0 0 50px;
    }
    .listC3 {
      font-size: 25px;
      color: rgb(255, 165, 0);
      margin: 150px 0 0 40px;
    }
    .listE3 {
      color: rgb(255, 165, 0);
      margin: 15px 0 0 50px;
    }
  }
  // 图片
  .picture {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .listC4 {
    font-size: 25px;
    color: rgb(207, 116, 161);
    text-align: center;
  }
  .listE4 {
    color: rgb(207, 116, 161);
    text-align: center;
  }
  .picture-4 {
    width: 100%;
  }
}
@media (max-width: 1100px) {
  .content {
    max-width: 900px;
  }
}
@media (max-width: 910px) {
  .content {
    max-width: 800px;
  }
}
@media (max-width: 810px) {
  .content {
    max-width: 700px;
  }
}
@media (max-width: 710px) {
  .content {
    max-width: 600px;
  }
}
@media (max-width: 610px) {
  .content {
    max-width: 500px;
  }
}
// 页脚
.footer {
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid #dfdfdf;
  height: 230px;
  color: #0073bb;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    margin:0 6px 0 6px;
  }
}
.el-backtop {
  z-index: 9999999;
}
</style>
