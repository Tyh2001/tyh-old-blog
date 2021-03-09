<template>
  <div id="settingIndex">
    <UserForm />
  </div>
</template>

<script>
import UserForm from './components/UserForm'
export default {
  name: 'settingIndex',
  components: {
    UserForm
  }
}
</script>

<style lang="less" scoped>
#settingIndex {
  width: 650px;
  margin: 15px auto;
  padding-bottom: 50px;
}
</style>
