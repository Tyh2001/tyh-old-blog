<template>
  <div
    id="settingIndex"
    :style="
      theme
        ? 'background: #0d1117; color: #c9d1d9;'
        : 'background: #faf8ff;color: #32373c;'
    "
  >
    <HeaderInfo />

    <el-divider />

    <!-- 表单 -->
    <div class="userForm">
      <div class="info">
        <UserInfo />
      </div>

      <div class="userPhoto">
        <img
          class="userImg"
          src="https://wx1.sinaimg.cn/large/007LmPOmly1go95lrt7nrj30m30m3n5c.jpg"
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
      </div>
    </div>

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
</template>

<script>
import { mapState } from 'vuex' // 映射 vuex
import UserInfo from './components/UserInfo'
import HeaderInfo from './components/HeaderInfo'
// 头像裁切器
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  name: 'settingIndex',
  components: {
    UserInfo,
    HeaderInfo
  },
  computed: {
    // 获取到 vuex 中主题状态
    ...mapState(['theme'])
  },
  data () {
    return {
      photoDialog: false, // 上传头像的对话框显示状态
      photoBlob: null // 需要裁切的图片
    }
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
    }
  }
}
</script>

<style lang="less" scoped>
#settingIndex {
  width: 650px;
  padding: 20px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 50px;
  .userForm {
    display: flex;
    justify-content: space-around;
    // 资料
    .info {
      width: 450px;
      padding: 30px;
      box-sizing: border-box;
    }
    // 用户头像
    .userPhoto {
      width: 200px;
      .userImg {
        width: 150px;
        border-radius: 50%;
        cursor: pointer;
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
