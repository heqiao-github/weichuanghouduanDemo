
import request from '../utils/request';


export const logins = (data) =>{
   return  request({
        url: '/api/user/login',
        method: 'post',
        data
      })
}

