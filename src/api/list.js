/**
 * 文章相关
 */

import request from '@/utils/request'

// 登录
export const getBlogList = () => {
  return request({
    method: 'GET',
    url: '/tyh/bloglist1'
  })
}
