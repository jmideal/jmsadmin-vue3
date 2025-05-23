import request from '@/utils/request'

// 查询登录日志列表
export function list(query) {
  return request({
    url: '/monitor/logininfor/list',
    method: 'get',
    params: query
  })
}

// 删除登录日志
export function delLogininfor(infoId) {
  return request({
    url: '/monitor/logininfor/remove',
    method: 'post',
    data: {infoId: infoId}
  })
}

// 解锁用户登录状态
export function unlockLogininfor(userName) {
  return request({
    url: '/monitor/logininfor/lockRemove/',
    method: 'post',
    data: {userName: userName}
  })
}

// 清空登录日志
export function cleanLogininfor() {
  return request({
    url: '/monitor/logininfor/allRemove',
    method: 'post'
  })
}
