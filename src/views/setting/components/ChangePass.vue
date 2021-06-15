<template>
  <div id="ChangePass">
    <!-- 用户密码设置 -->
    <el-divider content-position="left">更改密码</el-divider>
    <div class="userForm">
      <el-form
        class="info"
        size="small"
        :model="changePass"
        :rules="newPassRules"
        ref="passRule"
      >
        <!-- 初始密码 -->
        <el-form-item label="初始密码">
          <el-input v-model="changePass.originalPass" />
        </el-form-item>

        <!-- 新密码 -->
        <el-form-item label="新密码" prop="newPass1">
          <el-input v-model="changePass.newPass1" />
        </el-form-item>

        <!-- 确认密码 -->
        <el-form-item label="确认密码" prop="newPass2">
          <el-input v-model="changePass.newPass2" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" @click="changePassWord">
            更改密码
          </el-button>
        </el-form-item>
      </el-form>
      <div class="userPhoto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePass',
  components: {},
  props: {},
  data () {
    return {
      // 更改密码
      changePass: {
        originalPass: '', // 原始密码
        newPass1: '', // 新密码1
        newPass2: '' // 新密码2
      },
      // 更改密码的表单验证
      newPassRules: {
        newPass1: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'))
              } else {
                // 如果密码框2有值的时候 当密码框1失去焦点时触发
                if (this.changePass.newPass2 !== '') {
                  this.$refs.passRule.validateField('newPass2')
                }
              }
            },
            trigger: 'blur'
          }
        ],
        newPass2: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.changePass.newPass1) {
                callback(new Error('两次密码输入不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 点击更改密码按钮
    changePassWord () {
      console.log('更改密码11')
    }
  }
}
</script>

<style lang="" src="../style/index.less" scoped></style>
