import request from '@/utils/request'

export const ceshi = () => {
  return request({
    method: 'GET',
    url: '/api/ceshi'
  })
}
