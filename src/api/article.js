/**
 * 文章相关
 */

import request from '@/utils/request'

// 获取我发布的博客内容
export const getBlogList = () => {
  return request({
    method: 'GET',
    url: '/tyh/BlogList'
  })
}

// 获取vue技术文章
export const getVueDoc = () => {
  return request({
    method: 'GET',
    url: '/tyh/document/vue'
  })
}

// 获取JS技术文章
export const getJsDoc = () => {
  return request({
    method: 'GET',
    url: '/tyh/document/js'
  })
}

// 获取其他技术文章
export const getOtherDoc = () => {
  return request({
    method: 'GET',
    url: '/tyh/document/other'
  })
}

// 获取评论留言列表
export const getCommitList = () => {
  return request({
    method: 'GET',
    url: '/tyh/commitList'
  })
}
