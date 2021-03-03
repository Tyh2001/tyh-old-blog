<template>
  <div>
    <!-- 主页说明 -->
    <div
      class="explain"
      :style="homePageImg"
    >
      <div class="PhotoBox">
        <img class="myPhoto" src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcQy2B2YFlT1RLRHihM9ad7lpFJGoQQE5khd*kn0j*bnbIzPkplEqpg*mdY5SN4ozH.WlbL0Nrtw5DOpFddNOqa0!/r">
        <div class="title">
          <h1>Hi,前端伙伴！</h1>
          <div>—— 这是一个还凑合的个人网站 ——</div>
          <h3>俱往矣i</h3>
        </div>
      </div>
      <Time />
    </div>

    <!-- 中间部分 -->
    <div
      class="middleBox"
      :style="$store.state.theme ? 'background: #0d1117;' : 'background: #eceff1;'"
    >
      <!-- 新的一天 -->
      <p
        class="newDay"
        :style="$store.state.theme ? 'color: #c9d1d9;' : 'color: #32373c;'"
      >
        <span>“</span>
        A new day begins with npm run dev and npm run serve.
        <span>”</span>
      </p>

      <!-- 三段话 -->
      <div class="say">
        <div
          class="sayData"
          v-for="(say, index) in sayList"
          :key="index"
        >
          <fieldset>
            <legend
              :style="$store.state.theme ? 'color: #c9d1d9;' : 'color: #32373c;'"
            >{{ say.title }}</legend>
          </fieldset>
          <p
            :style="$store.state.theme ? 'color: #c9d1d9;' : 'color: #32373c;'"
          >{{ say.content }}</p>
        </div>
      </div>

      <!-- 向下的按钮 -->
      <div class="toBottom">
        <i
          class="el-icon-d-arrow-right"
          :style="$store.state.theme ? 'color: #c9d1d9;' : 'color: #32373c;'"
          @click="toBottom"
        />
      </div>
    </div>

    <!-- 底部部分 -->
    <BottomList />
  </div>
</template>

<script>
// 获取主页背景图
import { getHomePage } from '@/api/homePage'
import Time from './components/Time' // 时间罗盘
import BottomList from './components/BottomList' // 底部图片文案
export default {
  name: 'homeeIndex',
  components: {
    Time,
    BottomList
  },
  data () {
    return {
      sayList: [
        {
          title: '返璞归真',
          content: '身处在前端社区的繁荣之下，我们都在有意或无意地追逐。奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。'
        },
        {
          title: '洗尽铅华',
          content: '终有一天，昔日的痛苦与欢乐都会变成同样的颜色，唯留一颗平静的心，碾过灵魂的支点，站成永恒。洗尽铅华，是一种生命淡如水的境界；是繁华后的宁静;是远离喧嚣的清澈。'
        },
        {
          title: '星辰大海',
          content: '如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。'
        }
      ],
      homePageImg: '' // 主页背景图
    }
  },
  created () {
    this.loadgetHomePage() // 获取主页背景图
  },
  methods: {
    // 点击向下滚动效果
    toBottom () {
      window.scrollTo({
        top: 1500,
        behavior: 'smooth'
      })
    },
    // 获取主页背景图
    async loadgetHomePage () {
      const { data } = await getHomePage()
      this.homePageImg = data.url
    }
  }
}
</script>

<style lang="less" scoped>
// 主页说明
.explain {
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  user-select: none;
  // 头像
  .PhotoBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    top: 80px;
    z-index: 20;
    .myPhoto {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 5px solid rgba(216, 216, 216, 0.4);
    }
    .title {
      margin-left: 30px;
      h1 {
        font-size: 60px;
        color: #f0efef;
      }
      div {
        color: #fff;
      }
      h3 {
        color: #fff;
        padding-top: 20px;
      }
    }
  }
}
// 中间部分
.middleBox {
  height: 500px;
  // 新的一天
  .newDay {
    padding-top: 60px;
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    span {
      font-size: 35px;
    }
  }
  // 三段话
  .say {
    width: 920px;
    display: flex;
    margin: 60px auto;
    justify-content: space-around;
    .sayData {
      width: 290px;
      height: 180px;
      border: 1px solid #d2d2d2;
      fieldset {
        border-bottom: transparent;
        border-left: transparent;
        border-right: transparent;
        border-top: 1px solid #d2d2d2;
        margin-top: 30px;
        legend {
          text-align: center;
          padding-left: 20px;
          padding-right: 20px;
          font-size: 21px;
        }
      }
      p {
        color: #261600;
        font-size: 14px;
        width: 270px;
        margin: 25px auto;
      }
    }
  }
  // 向下按钮
  .toBottom {
    width: 40px;
    margin: auto;
    .el-icon-d-arrow-right {
      font-size: 40px;
      margin: auto;
      transform: rotate(90deg);
      cursor: pointer;
      animation: toBottom 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
        @keyframes toBottom {
        0% {
          margin-top: 0px;
        }
        50% {
          margin-top: 20px;
        }
        100% {
          margin-top: 0px;
        }
      }
    }
  }
}
@media screen and (max-width: 945px) {
  // 下面展示的三段话
  .middleBox {
    height: 900px;
    .say {
      width: 100%;
      display: block;
      .sayData {
        width: 550px;
        height: 180px;
        margin: 20px auto;
        border: 1px solid #d2d2d2;
        fieldset {
          border-bottom: transparent;
          border-left: transparent;
          border-right: transparent;
          border-top: 1px solid #d2d2d2;
          margin-top: 30px;
          legend {
            text-align: center;
            padding-left: 20px;
            padding-right: 20px;
            font-size: 21px;
          }
        }
        p {
          color: #261600;
          font-size: 14px;
          width: 80%;
          margin: 25px auto;
        }
      }
    }
  }
  .Bottom {
    top: 1930px;
  }
}
</style>
