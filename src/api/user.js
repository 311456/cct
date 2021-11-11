import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 注册
export function register(data) {
  return request({
    url: api.Register,
    method: 'post',
    data,
    hideloading: true
  })
}

export function getAlltucao() {
  return request({
    url: api.showall,
    method: 'get',
    hideloading: true
  })
}
