import request from '@/utils/request'

// 查询岗位信息列表
export function listPost(query) {
  return request({
    url: '/system/post/list',
    method: 'get',
    params: query
  })
}

// 查询岗位信息详细
export function getPost(postId) {
  return request({
    url: '/system/post/info',
    method: 'get',
    params: {postId: postId}
  })
}

// 新增岗位信息
export function addPost(data) {
  return request({
    url: '/system/post/add',
    method: 'post',
    data: data
  })
}

// 修改岗位信息
export function updatePost(data) {
  return request({
    url: '/system/post/edit',
    method: 'post',
    data: data
  })
}

// 删除岗位信息
export function delPost(postId) {
  return request({
    url: '/system/post/remove',
    method: 'post',
    data: {'postId': postId}
  })
}
