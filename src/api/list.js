/**
 * 获取我的发布内容
 */

import request from '@/utils/request'

// 登录
export const getBlogList = () => {
  return request({
    method: 'GET',
    url: '/tyh/bloglist1'
  })
}
