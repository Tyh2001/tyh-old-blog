<template>
  <div>
    <el-form :model="userInfo" label-width="80px" size="small">
      <!-- 昵称 -->
      <el-form-item label="昵称">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>

      <!-- 性别 -->
      <el-form-item label="性别">
        <el-select v-model="userInfo.Gender" placeholder="请选择性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
          <el-option label="保密" value="3"></el-option>
        </el-select>
      </el-form-item>

      <!-- 感情状况 -->
      <el-form-item label="感情状态">
        <el-select v-model="userInfo.feeling" placeholder="请选择感情状态">
          <el-option label="单身" value="1"></el-option>
          <el-option label="恋爱中" value="2"></el-option>
          <el-option label="暗恋中" value="3"></el-option>
          <el-option label="暧昧中" value="4"></el-option>
          <el-option label="求交往" value="5"></el-option>
          <el-option label="订婚" value="6"></el-option>
          <el-option label="已婚" value="7"></el-option>
          <el-option label="保密" value="8"></el-option>
        </el-select>
      </el-form-item>

      <!-- 血型 -->
      <el-form-item label="血型">
        <el-select v-model="userInfo.blood" placeholder="请选择血型">
          <el-option label="A型" value="1"></el-option>
          <el-option label="B型" value="2"></el-option>
          <el-option label="AB型" value="3"></el-option>
          <el-option label="O型" value="4"></el-option>
        </el-select>
      </el-form-item>

      <!-- 个性签名 -->
      <el-form-item label="个性签名">
        <el-input type="textarea" v-model="userInfo.autograph"></el-input>
      </el-form-item>

      <!-- 邮箱 -->
      <el-form-item label="邮箱">
        <el-input v-model="userInfo.mail"></el-input>
      </el-form-item>

      <!-- QQ -->
      <el-form-item label="QQ">
        <el-input v-model="userInfo.QQ"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userInfo: {
        name: '', // 昵称
        Gender: '', // 性别
        feeling: '', // 感情状态
        blood: '', // 血型
        autograph: '', // 个人签名
        mail: '', // 邮箱
        QQ: '' // 邮箱
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-select {
  width: 100%;
}
</style>
