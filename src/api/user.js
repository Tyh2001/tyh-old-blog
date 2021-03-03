/**
 * 用户相关
 */

import request from '@/utils/request'

// 登录
export const onLogin = () => {
  return request({
    method: 'POST',
    url: '/tyh/onlogin'
  })
}
