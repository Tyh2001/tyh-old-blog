<template>
  <div id="ChangeInfo">
    <!-- 用户基本设置 -->
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
          <el-input v-model="UserForm.name" />
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
          <el-input v-model="UserForm.mail" />
        </el-form-item>

        <!-- QQ -->
        <el-form-item label="QQ">
          <el-input v-model="UserForm.QQ" />
        </el-form-item>

        <!-- 个性签名 -->
        <el-form-item label="个性签名">
          <el-input type="textarea" v-model="UserForm.autograph" />
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
            <el-button
              @click="photoDialog = false"
            >
              取 消
            </el-button>
            <el-button
              type="primary"
              @click="confirmChangePhoto"
            >
              确 定
            </el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 头像裁切器
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
// 获取下拉列表内容 - 获取用户信息
import { getSettingSelect, onLogin } from '@/api/user'
export default {
  name: 'ChangeInfo',
  components: {},
  props: {},
  data () {
    return {
      UserForm: {}, // 用户信息
      selectData: {}, // 下拉菜单数据
      photoDialog: false, // 上传头像的对话框显示状态
      photoBlob: null, // 需要裁切的图片
      cropper: null // 裁切器实例
    }
  },
  computed: {
    ...mapState(['userInfo', 'theme'])
  },
  watch: {},
  created () {
    this.loadgetSettingSelect() // 获取下拉菜单内容
    this.loadonLogin() // 获取下拉菜单内容
  },
  mounted () {},
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
      this.cropper = new Cropper(image, {
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
    // 点击确定时 获取裁切的内容
    confirmChangePhoto () {
      this.cropper.getCroppedCanvas().toBlob(filePhoto => {
        this.UserForm.userPhoto = filePhoto

        // 关闭对话框
        this.photoDialog = false
      })
    }
  }
}
</script>

<style lang="" src="../style/index.less" scoped></style>
