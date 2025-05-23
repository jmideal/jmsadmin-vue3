import request from '@/utils/request'

// 查询字典类型列表
export function listType(query) {
  return request({
    url: '/system/dictType/list',
    method: 'get',
    params: query
  })
}

// 查询字典类型详细
export function getType(dictId) {
  return request({
    url: '/system/dictType/info',
    method: 'get',
    params: {dictId: dictId}
  })
}

// 新增字典类型
export function addType(data) {
  return request({
    url: '/system/dictType/add',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function updateType(data) {
  return request({
    url: '/system/dictType/edit',
    method: 'post',
    data: data
  })
}

// 删除字典类型
export function delType(dictId) {
  return request({
    url: '/system/dictType/remove/',
    data: {dictId: dictId},
    method: 'post'
  })
}

// 刷新字典缓存
export function refreshCache() {
  return request({
    url: '/system/dictType/cachesRemove',
    method: 'post'
  })
}

// 获取字典选择框列表
export function optionselect() {
  return request({
    url: '/system/dictType/optionSelectList',
    method: 'get'
  })
}
