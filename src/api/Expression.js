/**
 * 表情相关
 */

import request from '@/utils/request'

// 获取表情列表内容
export const getExpressionList = () => {
  return request({
    method: 'GET',
    url: '/tyh/Expression'
  })
}
