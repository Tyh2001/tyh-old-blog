<template>
  <div id="FooterList">
    <div class="foot-data">
      <div class="footer-data">
        <img
          class="Myphoto"
          src="http://r.photo.store.qq.com/psc?/V52OzcjM296N4D3IEo5e1DfOQZ1pM1IO/45NBuzDIW489QBoVep5mcQy2B2YFlT1RLRHihM9ad7lpFJGoQQE5khd*kn0j*bnbIzPkplEqpg*mdY5SN4ozH*eweuL31n36RYREYa561J4!/r"
          alt=""
        />
        <div class="MyList">
          <h1>Tyh.</h1>
          <p>此网站 2021-1-28 发布上线</p>
        </div>
      </div>

      <div class="footer-website">
        <a target="_blank" href="https://github.com/Tyh2001" title="Github">
          <i class="tyh tyh-github" />
        </a>
        <a target="_blank" href="https://gitee.com/tyh666999" title="Gitee">
          <i class="tyh tyh-gitee" />
        </a>
        <a target="_blank" href="https://www.zhihu.com/people/nan-gua-zui-kai-xin" title="知乎">
          <i class="tyh tyh-zhihu" />
        </a>
        <a target="_blank" href="https://music.163.com/#/my/m/music/playlist?id=973798174" title="网易云音乐">
          <i class="tyh tyh-wangyiyunyinle" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterList',
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
// 页脚
#FooterList {
  user-select: none;
  width: 100%;
  height: 230px;
  background: rgb(35, 40, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  .foot-data {
    // 我的资料
    .footer-data {
      width: 440px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .Myphoto {
        width: 60px;
        height: 60px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
      }
      .MyList {
        margin-left: 20px;
        h1 {
          color: #0073bb;
          font-size: 20px;
          font-weight: 800;
        }
        p {
          color: #0073bb;
          font-size: 18px;
        }
      }
    }
    // 外链
    .footer-website {
      padding-top: 20px;
      width: 300px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        margin-right: 20px;
        font-size: 30px;
        cursor: pointer;
        position: relative;
        color: rgb(63, 83, 110);
      }
      i:hover {
        transition: 0.25s;
        color: #0073bb;
      }
    }
  }
}
</style>
