<template>
  <div
    id="NewBottomList"
    :style="theme ? 'background: #0d1117;' : 'background: #eceff1;'"
  >

    <div id="allChotent">
      <div class="left-content content">123</div>
      <div class="right-content content"></div>
    </div>

    <div id="allChotent">
      <div class="right-content content"></div>
      <div class="left-content content">123</div>
    </div>

    <div id="allChotent">
      <div class="left-content content">123</div>
      <div class="right-content content"></div>
    </div>

    <div id="allChotent">
      <div class="right-content content"></div>
      <div class="left-content content">123</div>
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
  name: 'NewBottomList',
  components: {
    FooterList
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>
// 底部部分
#NewBottomList {
  width: 100%;
  margin-top: 500px;
  // user-select: none;
  #allChotent {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .left-content {
      width: 500px;
      height: 300px;
      border: 1px solid #c4c4c4;
    }
    .right-content {
      width: 700px;
      height: 400px;
      background: url('../images/项目用图2 (5).jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
@media (max-width: 1150px) {
  #allChotent {
    max-width: 1000px;
    .left-content {
      max-width: 400px;
      max-height: 200px;
    }
    .right-content {
      max-width: 600px;
      max-height: 300px;
    }
  }
}
@media (max-width: 1000px) {
  #allChotent {
    max-width: 800px;
    .left-content {
      max-width: 300px;
      max-height: 100px;
    }
    .right-content {
      max-width: 500px;
      max-height: 200px;
    }
  }
}
@media (max-width: 850px) {
  #allChotent {
    max-width: 700px;
    .left-content {
      max-width: 250px;
      max-height: 100px;
    }
    .right-content {
      max-width: 450px;
      max-height: 200px;
    }
  }
}
@media (max-width: 750px) {
  #allChotent {
    max-width: 100%;
    display: block !important;
    .left-content {
      // max-width: 250px;
      max-width: 100%;
      max-height: 100px;
    }
    .right-content {
      // max-width: 450px;
      max-width: 100% !important;
      max-height: 200px;
    }
  }
}
// @media (max-width: 1100px) {
//   #allChotent {
//     max-width: 900px;
//     .content {
//       max-height: 230px;
//     }
//   }
// }
// @media (max-width: 1000px) {
//   #allChotent {
//     max-width: 800px;
//     .content {
//       max-height: 210px;
//     }
//   }
// }
// @media (max-width: 900px) {
//   #allChotent {
//     max-width: 700px;
//     .content {
//       max-height: 190px;
//     }
//   }
// }
</style>
