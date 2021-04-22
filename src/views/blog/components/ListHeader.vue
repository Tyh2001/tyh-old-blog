<template>
  <div id="ListHeader">
    <!-- 列表头部 包含头像 昵称 时间 删除等 -->
    <!-- 我的资料 -->
    <div class="userInfo">
      <!-- 头像 -->
      <div class="photoBox">
        <img
          class="userPhoto"
          src="https://www.hualigs.cn/image/608132a6c15b2.jpg"
        />
      </div>
      <div class="info">
        <p class="nickName">俱往矣i</p>
        <p class="time">2021-3-7 12:52</p>
      </div>
    </div>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="del">删除</el-dropdown-item>
        <el-dropdown-item>收藏</el-dropdown-item>
        <el-dropdown-item>举报</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { Message } from 'at-ui'
export default {
  name: 'ListHeader',
  props: {
    // 删除的索引值
    index: {
      type: Number,
      rquired: true
    },
    // 数据列表
    blogList: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 删除
    del () {
      this.$confirm('确定删除该动态吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.blogList.splice(this.index, 1)
        Message.success({
          message: '删除成功！',
          duration: 900
        })
      }).catch(() => {})
    }
  }
}
</script>

<style lang="less" scoped>
#ListHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 用户信息
  .userInfo {
    display: flex;
    align-items: center;
    // 头像
    .photoBox {
      width: 50px;
      .userPhoto {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    // 用户名
    .info {
      margin-left: 10px;
      .nickName {
        font-size: 15px;
        font-weight: 600;
      }
      .time {
        font-size: 12px;
        color: #a5aaad;
      }
    }
  }
  // 下拉菜单
  .el-dropdown {
    cursor: pointer;
    i {
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
    i:hover {
      color: #ff890f;
      background: #fff2e5;
      border-radius: 50%;
    }
  }
}
</style>
