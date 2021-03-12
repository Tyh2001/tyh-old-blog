/**
 * 用户相关
 */

import request from '@/utils/request'

// 登录
export const onLogin = () => {
  return request({
    method: 'POST',
    url: '/tyh/onLogin'
  })
}

// 获取设置下拉列表内容
export const getSettingSelect = () => {
  return request({
    method: 'GET',
    url: '/tyh/setting/select'
  })
}
