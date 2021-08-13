
import request from '../utils/request';


export const logins = (data) =>{
   return  request({
        url: '/api/user/login',
        method: 'post',
        data
      })
}

export const reqUserList = () => {
  return request({
    method: "GET",
    url: "/api/user/list"
  })
}

export const reqDeleteUser = (data) => {
  return request({
    method: "POST",
    url: "/api/user/deleteUser",
    data: data
  })
}

export const reqAddUpdateUser = (data) => {
  let url = "";
  if(data.userId){
    url = "/api/user/userUpdate"
  }else{
    url = "/api/user/userAdd"
  }
  return request({
    method: "POST",
    url: url,
    data: data
  })
}


export const activeApply = () => {
  return request({
    method: "get",
    url: "/api/user/activeApply",
  })
}

export const getTableInfo = () => {
  return request({
    method: "get",
    url: "/api/user/getTableInfo",
  })
}

