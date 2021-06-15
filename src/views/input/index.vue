<template>
  <div id="inputIndex">
    <mavon-editor v-model="value" />

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>

    <at-card style="width: 300px">
      <h4 slot="title">Card Title</h4>
      <div slot="extra"><a>Extra</a></div>
      <div>
        <img src="../comment/images/emoji表情/1.png" />
      </div>
    </at-card>

    <div v-html="images"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { Card } from 'at-ui'
Vue.use(mavonEditor)
Vue.use(Card)
export default {
  name: 'inputIndex',
  data () {
    return {
      value: '',
      images: `<img src="${require('../comment/images/emoji表情/1.png')}">`,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          {
            validator: (rule, value, callback) => {
              console.log(value)
              if (value === '') {
                callback(new Error('请输入密码'))
              } else {
                if (this.ruleForm.checkPass !== '') {
                  this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            validator: (rule, value, callback) => {
              console.log(value)
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'))
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
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#inputIndex {
  background: #fff;
}
</style>
