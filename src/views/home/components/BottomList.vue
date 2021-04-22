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
        src="https://www.hualigs.cn/image/608133fb1c409.jpg"
      />
    </div>

    <!-- 第二段内容 -->
    <div class="content">
      <div class="words">
        <h1 class="listC2">“ 我们在很久很久以前，就没有以后了 ”</h1>
        <p class="listE2">" wo men zai hen jiu hen jiu yi qian, jiu mei you yi hou le "</p>
      </div>
      <div class="picture">
        <img
          src="https://www.hualigs.cn/image/608133fb4d158.jpg"
        />
      </div>
    </div>

    <!-- 第三段内容 -->
    <div class="content">
      <div class="picture">
        <img
          src="https://www.hualigs.cn/image/608133fb65e95.jpg"
        />
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
          src="https://www.hualigs.cn/image/608133fb4e802.jpg"
        />
      </div>
    </div>

    <!-- 页脚 -->
    <FooterList />

    <!-- 返回顶部 -->
    <el-backtop>
      <i class="tyh tyh-huojian" />
    </el-backtop>

  </div>
</template>

<script>
// 页脚组件
import FooterList from '@/components/FooterList'
import { mapState } from 'vuex' // 映射 vuex
export default {
  name: 'BottomList',
  components: {
    FooterList
  },
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
.content:nth-child(4) {
  padding-bottom: 80px;
}
@media (max-width: 1100px) {
  .content {
    max-width: 900px;
  }
}
@media (max-width: 920px) {
  .content {
    max-width: 800px;
  }
}
@media (max-width: 810px) {
  .content {
    max-width: 700px;
  }
}
@media (max-width: 720px) {
  .content {
    max-width: 600px;
  }
}
@media (max-width: 620px) {
  .content {
    max-width: 500px;
  }
}
@media (max-width: 520px) {
  .content {
    max-width: 400px;
  }
}
.el-backtop {
  z-index: 9999999;
}
</style>
