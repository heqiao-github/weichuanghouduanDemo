
import request from '../utils/request';


export const logins = (data) =>{
   return  request({
        url: '/api/user/login',
        method: 'post',
        data
      })
}

export const reqAddUpdateUser = (data) => {
  let url = "";
  if(data._id){
    url = "/api/manage/user/update"
  }else{
    url = "/api/manage/user/add"
  }
  return request({
    method: "POST",
    url: url,
    data: data
  })
}