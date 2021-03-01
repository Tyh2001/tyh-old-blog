<template>
  <div id="home">
    <div class="Top">
      <!-- 主页说明 -->
      <div class="explain">
        <div class="PhotoBox">
          <!-- <img class="myPhoto" src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcWEHi*bNa1zTU8Ud6fRbryqslni7.LUdupyu2rLisfWEsJavkzpgKnpT6TJQaket6jpv6cxe4ah4g2CMJ3fXreI!/r" alt=""> -->
          <img class="myPhoto" src="./images/头像02.jpg" alt="">
          <div class="title">
            <h1>Hi,前端伙伴！</h1>
            <div>—— 这是一个还凑合的个人网站 ——</div>
          </div>
        </div>
        <Time />
      </div>

      <!-- 下面三段话 -->
      <div class="sayThree">
        <!-- 新的一天 -->
        <p class="newDay">
          <span>“</span>
          A new day begins with npm run dev and npm run serve.
          <span>”</span>
        </p>

        <!-- 三段话 -->
        <div class="say">
          <div class="sayData">
            <fieldset>
                <legend>返璞归真</legend>
            </fieldset>
            <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。</p>
          </div>
          <div class="sayData">
            <fieldset>
              <legend>洗尽铅华</legend>
            </fieldset>
            <p>终有一天，昔日的痛苦与欢乐都会变成同样的颜色，唯留一颗平静的心，碾过灵魂的支点，站成永恒。洗尽铅华，是一种生命淡如水的境界；是繁华后的宁静;是远离喧嚣的清澈。</p>
          </div>
          <div class="sayData">
            <fieldset>
              <legend>星辰大海</legend>
            </fieldset>
            <p>如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。</p>
          </div>
        </div>

        <!-- 向下的按钮 -->
        <div class="toBottom">
          <i class="el-icon-d-arrow-right" />
        </div>
      </div>
    </div>

    <div class="Bottom">
      <!-- 第一段 -->
      <div class="Copywriting1">“ 慢慢来吧 谁都有努力的过程 ”</div>
      <div class="CopywritingEng1">“ man man lai ba shei dou you nu li de guo cheng ”</div>
      <!-- <img class="bottomImg1" src="./images/下方2.jpg" alt=""> -->
      <img class="bottomImg1" src="./images/下方4.png" alt="">

      <!-- 第二段 -->
      <div class="secondText">
        <div class="text">
          <div class="Copywriting2">“ 我们在很久很久以前 就没有以后了 ”</div>
          <div class="CopywritingEng2">“ wo men zai hen jiu hen jiu yi qian jiu mei you yi hou le ”</div>
        </div>
        <!-- <img class="bottomImg2" src="./images/下面背景.jpg" alt=""> -->
        <img class="bottomImg2" src="./images/唯美小熊.png" alt="">
      </div>

      <!-- 第三段 -->
      <div class="secondText2">
        <!-- <img class="bottomImg3" src="./images/下方3.png" alt=""> -->
        <img class="bottomImg3" src="./images/最爱的人.png" alt="">
        <div class="text2">
          <div class="Copywriting3">“ 愿我最爱的人 也最爱我 ”</div>
          <div class="CopywritingEng3">“ yuan wo zui ai de ren ye zui ai wo ”</div>
        </div>
      </div>

      <!-- 第四段 -->
      <div class="secondText3">
        <div class="text3">
          <p class="Copywriting4">“ 最怕你一生碌碌无为，还安慰自己平凡可贵 ”</p>
          <p class="CopywritingEng4">“ zui pa ni yi sheng lu lu wu wei, hai an wei zi ji ping fan ke gui ”</p>
        </div>
        <div class="imgBox">
          <img class="bottomImg4" src="./images/碌碌无为2.png" alt="">
        </div>
      </div>

      <div class="footer">
        <p>—— 这是页脚 2021-2-28 22:22 ——</p>
      </div>

    </div>
  </div>
</template>

<script>
import Time from './components/Time'
import { ceshi } from '@/api/ceshi'
export default {
  name: 'homeIndex',
  components: {
    Time
  },
  created () {
    this.loadceshi()
  },
  methods: {
    async loadceshi () {
      const { data } = await ceshi()
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.Top {
  // 导航栏
  .navigationBar {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    background: #23282d;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #dfdfdf;
    // 我的的名字
    .myName {
      cursor: pointer;
      display: inline-block;
      margin-left: 40px;
      .name1 {
        font-size: 30px;
        font-weight: 600;
      }
      .name2 {
        font-size: 18px;
      }
    }
    // 导航菜单
    ul {
      display: flex;
      list-style: none;
      // margin-left: 140px;
      li {
        margin-left: 40px;
        cursor: pointer;
      }
    }
    // 关于我
    .aboutMe {
      cursor: pointer;
      margin-right: 40px;
      .el-dropdown-link {
        color: #dfdfdf;
      }
    }
  }
  // 首页说明
  .explain {
    position: absolute;
    top: 70px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    background-color: #4693db;
    height: 450px;
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
          color: rgb(29, 29, 29);
        }
      }
    }
  }
  // 三段话
  .sayThree {
    position: absolute;
    top: 450px;
    left: 0px;
    right: 0px;
    background-color: #eceff1;
    height: 500px;
    // 新的一天
    .newDay {
      margin-top: 60px;
      text-align: center;
      font-size: 23px;
      color: #32373c;
      font-weight: 600;
      span {
        font-size: 35px;
      }
    }
    // 下面三段话
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
    // 向下的按钮
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
}
.Bottom {
  position: absolute;
  top: 1530px;
  left: 0px;
  right: 0px;
  background-color: #eceff1;
  // 文案1
  .Copywriting1 {
    font-size: 25px;
    font-family: "微软雅黑";
    font-weight: 600;
    color: #c4614c;
    margin: 90px 20px 0 50px;
  }
  .CopywritingEng1 {
    color: #c4614c;
    margin: 43px 0px 30px 60px;
  }
  // 图片1
  .bottomImg1 {
    width: 100%;
  }
  // 文案2
  .secondText {
    margin-top: 120px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .Copywriting2 {
      font-size: 25px;
      font-family: "微软雅黑";
      font-weight: 600;
      color: #64cffa;
      margin: 90px 20px 0 50px;
    }
    .CopywritingEng2 {
      color: #64cffa;
      margin: 43px 0px 30px 60px;
    }
    .bottomImg2 {
      width: 400px;
    }
  }
  // 文案3
  .secondText2 {
    margin-top: 120px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .bottomImg3 {
      width: 400px;
    }
    .Copywriting3 {
      font-size: 25px;
      font-weight: 600;
      color: orange;
      margin: 150px 10px 0 0;
    }
    .CopywritingEng3 {
      color: orange;
      margin: 43px 0px 30px 60px;
    }
  }
  // 文案4
  .secondText3 {
    margin-top: 100px;
    .text3 {
      color: #49faf8;
      .Copywriting4 {
        font-size: 23px;
        font-weight: 600;
        color: #49faf8;
        text-align: center;
      }
      .CopywritingEng4 {
        font-size: 20px;
        font-weight: 600;
        color: #49faf8;
        text-align: center;
        margin-top: 20px 0 40px 0;
      }
    }
    // 图片
    .imgBox {
      width: 800px;
      margin: 40px auto;
      img {
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
}
// 当浏览器小于 940 执行里面样式
@media screen and (max-width: 940px) {
  // 下面展示的三段话
  .sayThree {
    height: 900px !important;
    .say {
      width: 100% !important;
      display: block !important;
      .sayData {
        width: 550px !important;
        height: 180px !important;
        margin: 20px auto !important;
        border: 1px solid #d2d2d2 !important;
        fieldset {
          border-bottom: transparent !important;
          border-left: transparent !important;
          border-right: transparent !important;
          border-top: 1px solid #d2d2d2 !important;
          margin-top: 30px !important;
          legend {
            text-align: center !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            font-size: 21px !important;
          }
        }
        p {
          color: #261600 !important;
          font-size: 14px !important;
          width: 80% !important;
          margin: 25px auto !important;
        }
      }
    }
  }
  .Bottom {
    top: 1930px !important;
  }
}
</style>
