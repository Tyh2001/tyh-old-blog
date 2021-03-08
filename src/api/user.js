/**
 * 用户相关
 */

import request from '@/utils/request'

// 登录
export const onLogin = () => {
  return request({
    method: 'POST',
    url: '/tyh/onlogin2'
  })
}

// 获取个人信息
export const getSettingSelect = () => {
  return request({
    method: 'GET',
    url: '/tyh/setting/select'
  })
}
