<template>
  <div
    id="settingIndex"
    :style="
        theme
          ? 'background: #0d1117;'
          : 'background: #faf8ff;'
      "
  >
    <!-- 头部描述 -->
    <div id="HeaderInfo">
      <img class="photo" :src="userInfo.userPhoto">
      <div class="nameBox">
        <h2>{{ userInfo.name }}</h2>
        <p>您的基本账户信息</p>
      </div>
    </div>

    <!-- 基本设置 -->
    <el-divider content-position="left">基本设置</el-divider>
    <div class="userForm">
      <el-form class="info" :model="UserForm" size="small">
        <!-- 账号 -->
        <el-form-item label="账号">
          <br>
          <p>{{ UserForm.userName }}</p>
        </el-form-item>

        <!-- 昵称 -->
        <el-form-item label="昵称">
          <el-input v-model="UserForm.name"></el-input>
        </el-form-item>

        <!-- 性别 -->
        <el-form-item label="性别">
          <el-select v-model="UserForm.Gender" placeholder="请选择性别">
            <el-option
              v-for="(GenderItem, index) in selectData.Gender"
              :key="index"
              :label="GenderItem"
              :value="index"
            />
          </el-select>
        </el-form-item>

        <!-- 星座 -->
        <el-form-item label="星座">
          <el-select v-model="UserForm.Star" placeholder="请选择星座">
            <el-option
              v-for="(StarItem, index) in selectData.Star"
              :key="index"
              :label="StarItem"
              :value="index"
            />
          </el-select>
        </el-form-item>

        <!-- 感情状况 -->
        <el-form-item label="感情状态">
          <el-select v-model="UserForm.feeling" placeholder="请选择感情状态">
            <el-option
              v-for="(feelingItem, index) in selectData.feeling"
              :key="index"
              :label="feelingItem"
              :value="index"
            />
          </el-select>
        </el-form-item>

        <!-- 血型 -->
        <el-form-item label="血型">
          <el-select v-model="UserForm.blood" placeholder="请选择血型">
            <el-option
              v-for="(bloodItem, index) in selectData.blood"
              :key="index"
              :label="bloodItem"
              :value="index"
            />
          </el-select>
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item label="邮箱">
          <el-input v-model="UserForm.mail"></el-input>
        </el-form-item>

        <!-- QQ -->
        <el-form-item label="QQ">
          <el-input v-model="UserForm.QQ"></el-input>
        </el-form-item>

        <!-- 个性签名 -->
        <el-form-item label="个性签名">
          <el-input type="textarea" v-model="UserForm.autograph"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small">保存更新</el-button>
        </el-form-item>
      </el-form>

      <!-- 修改头像 -->
      <div class="userPhoto">
        <img
          class="userImg"
          :src="UserForm.userPhoto"
          @click="$refs['file-inp'].click()"
        >
        <!-- 编辑按钮 -->
        <div
          class="changePhoto"
          @click="$refs['file-inp'].click()"
        >
          <i class="tyh tyh-pan_icon" />
          编辑
        </div>
        <input
          type="file"
          ref="file-inp"
          accept="image/*"
          hidden
          @change="changePhoto"
        />

        <!-- 头像裁切器弹出框 -->
        <el-dialog
          title="更新头像"
          :visible.sync="photoDialog"
          @opened="onOpenedPhoto"
          @closed="onClosedRemove"
        >
          <div>
            <img
              style="width: 100%; max-height: 270px"
              :src="photoBlob"
              ref="user-photo"
            />
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="photoDialog = false">取 消</el-button>
            <el-button type="primary" @click="photoDialog = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>

    <!-- 更改密码 -->
    <el-divider content-position="left">更改密码</el-divider>
    <div class="userForm">
      <el-form class="info" size="small">
        <!-- 初始密码 -->
        <el-form-item label="初始密码">
          <el-input></el-input>
        </el-form-item>

        <!-- 新密码 -->
        <el-form-item label="新密码">
          <el-input></el-input>
        </el-form-item>

        <!-- 确认密码 -->
        <el-form-item label="确认密码">
          <el-input></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small">更改密码</el-button>
        </el-form-item>
      </el-form>
      <div class="userPhoto" />
    </div>

    <!-- 其他操作 -->
    <el-divider content-position="left">其他操作</el-divider>
    <div class="userForm">
      <div class="info">
        <el-button
          type="primary"
          size="small"
          class="outLogin"
          @click="outLogin"
        >
          退出当前账号
        </el-button>
      </div>
      <div class="userPhoto" />
    </div>
  </div>
</template>

<script>
// 弹出框提示
import { Message } from 'at-ui'
// 头像裁切器
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
// 获取下拉列表内容 - 获取用户信息
import { getSettingSelect, onLogin } from '@/api/user'
// 映射 vuex
import { mapState } from 'vuex'
export default {
  name: 'settingIndex',
  data () {
    return {
      UserForm: {}, // 用户信息
      selectData: {}, // 下拉菜单数据
      photoDialog: false, // 上传头像的对话框显示状态
      photoBlob: null // 需要裁切的图片
    }
  },
  computed: {
    ...mapState(['userInfo', 'theme'])
  },
  created () {
    this.loadgetSettingSelect() // 获取下拉菜单内容
    this.loadonLogin() // 获取下拉菜单内容
  },
  methods: {
    // 修改头像
    changePhoto () {
      const file = this.$refs['file-inp']
      const blob = window.URL.createObjectURL(file.files[0])
      this.photoBlob = blob
      this.photoDialog = true
    },
    // 对话框完全展示出来后 初始化裁切器
    onOpenedPhoto () {
      const image = this.$refs['user-photo']
      this.Cropper = new Cropper(image, {
        aspectRatio: 1 / 1,
        viewMode: 1, // 裁切框不能移出图片范围
        dragMode: 'none' // 背景画布禁止移动
      })
    },
    // 当对话框完全关闭时 销毁裁切器
    onClosedRemove () {
      this.$refs['file-inp'].value = ''
      this.Cropper.destroy() // 销毁裁切器
    },
    // 获取下拉列表内容
    async loadgetSettingSelect () {
      const { data } = await getSettingSelect()
      this.selectData = data
    },
    // 获取用户的信息
    async loadonLogin () {
      const { data } = await onLogin()
      for (const key in data) {
        const userName = data[key].userInfo.userName
        if (this.userInfo.userName === userName) {
          this.UserForm = data[key].userInfo
        }
      }
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
#settingIndex {
  width: 650px;
  margin: 15px auto;
  padding-bottom: 50px;
  // 头部
  #HeaderInfo {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    .photo {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .nameBox {
      margin-left: 10px;
    }
  }
  // 表单
  .userForm {
    display: flex;
    // 资料
    .info {
      width: 450px;
      padding: 30px;
      box-sizing: border-box;
      .el-select {
        width: 100%;
      }
      .el-button {
        width: 100%;
        border: none;
        background: #2ea44f;
      }
      // 退出登录
      .outLogin {
        background: rgb(243, 99, 63);
      }
    }
    // 用户头像
    .userPhoto {
      width: 200px;
      .userImg {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
        border: 3px solid rgba(176, 226, 255, 0.5);
      }
      // 修改头像
      .changePhoto {
        width: 50px;
        height: 22px;
        font-size: 12px;
        border: 1px solid rgb(197, 195, 195);
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        top: -25px;
        right: -5px;
        i {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
