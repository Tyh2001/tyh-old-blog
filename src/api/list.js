/**
 * 获取我的发布内容
 */

import request from '@/utils/request'

// 获取我发布的博客内容
export const getBlogList = () => {
  return request({
    method: 'GET',
    url: '/tyh/bloglist1'
  })
}

// 获取vue技术文章
export const getVueDoc = () => {
  return request({
    method: 'GET',
    url: '/tyh/document/vue'
  })
}

// 获取其他技术文章
export const getOtherDoc = () => {
  return request({
    method: 'GET',
    url: '/tyh/document/other'
  })
}
