/*
 * @Author: cq
 * @Date: 2021-02-19 09:41:38
 * @Description:  
 */
import request from '@/utils/request'

// 查询测试列表
export function listBusiness(query) {
  return request({
    url: '/business/business/list',
    method: 'get',
    params: query
  })
}

// 查询测试详细
export function getBusiness(id) {
  return request({
    url: '/business/business/' + id,
    method: 'get'
  })
}

// 新增测试
export function addBusiness(data) {
  return request({
    url: '/business/business',
    method: 'post',
    data: data
  })
}

// 修改测试
export function updateBusiness(data) {
  return request({
    url: '/business/business',
    method: 'put',
    data: data
  })
}

// 删除测试
export function delBusiness(id) {
  return request({
    url: '/business/business/' + id,
    method: 'delete'
  })
}

// 导出测试
export function exportBusiness(query) {
  return request({
    url: '/business/business/export',
    method: 'get',
    params: query
  })
}