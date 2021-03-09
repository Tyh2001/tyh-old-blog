<template>
  <div>
    <mavon-editor v-model="value" />
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
export default {
  name: 'inputIndex',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>
