import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getRoleList(params) {
  return request({
    url: '/role/list',
    method: 'get',
    params
  })
}

export function getRoleOne(params) {
  return request({
    url: '/role/one',
    method: 'get',
    params
  })
}

export function updateRole(params) {
  return request({
    url: '/role/update',
    method: 'put',
    data: params
  })

}

export function deleteRole(params) {
  return request({
    url: '/role/delete',
    method: 'delete',
    params
  })
}

export function createRole(params) {
  return request({
    url: '/role/create',
    method: 'post',
    data: params
  })
}
