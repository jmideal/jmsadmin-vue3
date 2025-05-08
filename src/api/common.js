import request from '@/utils/request'

export function upload(data, headers) {
    return request({
        url: '/system/common/upload',
        method: 'post',
        data: data,
        headers: headers
    })
}