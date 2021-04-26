<template>
  <div id="AboutMe">
    <!-- 关于我 -->
    <div class="aboutMe">

      <!-- 下拉菜单 -->
      <el-dropdown
        v-if="userInfo !== null"
        :hide-on-click="false"
      >
        <span class="el-dropdown-link">
          <img
            class="photo"
            :src="userInfo.userPhoto"
          >
          <span class="username">
            {{ userInfo.name }}
          </span>
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- 主题颜色 -->
          <el-dropdown-item>
            主题
            <i :class="theme ? 'el-icon-moon' : 'el-icon-sunny'" />
            <el-switch
              v-model="theme"
              active-color="#6e40c9"
              inactive-color="#58b0fb"
              divided
              @change="swithcChange"
            />
          </el-dropdown-item>

          <!-- 关于我 -->
          <el-dropdown-item
            @click.native="drawerShow = true"
          >
            About me
          </el-dropdown-item>

          <!-- 设置 -->
          <el-dropdown-item
            @click.native="$router.push('/setting')"
          >
            设置
          </el-dropdown-item>

          <!-- 退出登录 -->
          <el-dropdown-item
            @click.native="outLogin"
            style="color: rgb(245, 108, 108)"
          >
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <span
        class="pleaseOnLogin"
        v-else
        @click="$router.push('login')"
      >
        <i class="el-icon-user" />
        请登录
      </span>
    </div>

    <!-- 关于我的抽屉 -->
    <el-drawer
      :visible.sync="drawerShow"
      direction="ltr"
      :append-to-body="true"
      :modal-append-to-body="false"
    >
      <!-- 我的头像 -->
      <div class="muPhoto-Bpx"></div>

      <h1 class="MyUserName">俱往矣i</h1>

      <!-- 个性签名 -->
      <p class="autograph">最怕你一生碌碌无为，还安慰自己平凡可贵。</p>

      <!-- 个人网站 -->
      <div id="myWeb">
        <a target="_blank" href="https://github.com/Tyh2001">
          <i class="tyh tyh-huaban88" title="Github" />
        </a>
        <a target="_blank" href="https://gitee.com/tyh666999">
          <i class="tyh tyh-mayun" title="Gitee" />
        </a>
        <a target="_blank" href="https://music.163.com/#/my/m/music/playlist?id=973798174">
          <i class="tyh tyh-wangyiyunyinle" title="网易云音乐" />
        </a>
        <a target="_blank" href="https://www.zhihu.com/people/nan-gua-zui-kai-xin">
          <i class="tyh tyh-zhihu" title="知乎" />
        </a>
        <a target="_blank" href="http://toutiaopc.tianyuhao.icu">
          <i class="tyh tyh-wenzhang" title="文章发布后台管理系统" />
        </a>
        <a target="_blank" href="http://biaoqing.tianyuhao.icu">
          <i class="tyh tyh-biaoqing1" title="表情发布系统" />
        </a>
      </div>

      <!-- 网页制作时间计算 -->
      <p class="pageTime">此网站已强行运行了：{{ pageTime }}</p>
    </el-drawer>
  </div>
</template>

<script>
import { Message } from 'at-ui'
import { mapState } from 'vuex' // 映射 vuex
import { onTime } from '@/utils/day'
export default {
  name: 'AboutMe',
  components: {},
  computed: {
    ...mapState(['userInfo']) // 用户信息
  },
  data () {
    return {
      theme: this.$store.state.theme, // 主题状态
      drawerShow: true, // 关于我的抽屉展示
      pageTime: null // 网站制作的时间
    }
  },
  mounted () {
    setInterval(() => {
      this.pageTime = onTime('2021-01-28 00:00')
    }, 1000)
  },
  methods: {
    // 改变主题背景
    swithcChange () {
      this.$store.commit('changeTheme', this.theme)
    },
    // 退出登录
    outLogin () {
      this.$confirm('退出账号部分功能将不能使用，确定退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 退出后删除本地存储
        window.localStorage.removeItem('userInfo')
        this.$store.commit('changeUserInfo', null)
        Message.success({
          message: '退出登录成功！',
          duration: 900
        })
        this.$router.push('/')
      }).catch(() => {})
    }
  }
}
</script>

<style lang="less" scoped>
// 右边下拉菜单
.aboutMe {
  cursor: pointer;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-switch {
    margin-right: 20px;
  }
  .el-dropdown-link {
    color: #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
    .photo {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      margin-right: 6px;
    }
    // 用户昵称
    .username {
      color: #dfdfdf;
      font-size: 12px;
      display: inline-block;
      min-width: 45px;
    }
  }
  .pleaseOnLogin {
    font-size: 15px;
    color: #dfdfdf;
  }
}
// 抽屉
/deep/ .el-drawer {
  min-width: 330px !important;
  position: relative;
  .muPhoto-Bpx {
    width: 100px;
    height: 100px;
    background: url(https://www.hualigs.cn/image/608132a6c15b2.jpg) no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: auto;
  }
  // 我的昵称
  .MyUserName {
    margin-top: 10px;
    text-align: center;
    color: rgb(35, 40, 45);
  }
  // 个性签名
  .autograph {
    margin-top: 10px;
    text-align: center;
  }
  .pageTime {
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: 30px;
    text-align: center;
  }
  // 图标
  #myWeb {
    width: 200px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 20px;
      color: rgb(51, 51, 61);
      cursor: pointer;
    }
    // Gitgub
    .tyh-huaban88:hover {
      color: rgb(36, 41, 46);
      transition: 0.27s;
    }
    // Gitee
    .tyh-mayun:hover {
      color: rgb(199, 29, 35);
      transition: 0.27s;
    }
    // 网易云音乐
    .tyh-wangyiyunyinle:hover {
      color: rgb(194, 12, 12);
      transition: 0.27s;
    }
    // 知乎
    .tyh-zhihu:hover {
      color: rgb(0, 102, 255);
      transition: 0.27s;
    }
    // 文章发布后台管理系统
    .tyh-wenzhang:hover {
      color: rgb(64, 158, 255);
      transition: 0.27s;
    }
    // 表情
    .tyh-biaoqing1:hover {
      color: rgb(255, 193, 41);
      transition: 0.27s;
    }
  }
}
</style>
