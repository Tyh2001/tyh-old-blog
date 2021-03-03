/**
 * 主页背景
 */

import request from '@/utils/request'

// 获取主页背景图
export const getHomePage = () => {
  return request({
    method: 'GET',
    url: '/tyh/homepageImg'
  })
}
