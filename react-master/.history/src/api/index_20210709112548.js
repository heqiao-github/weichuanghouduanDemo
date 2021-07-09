import login from '../pages/login/login';
import request from '../utils/request';


export const login = () =>{
   return  request({
        url: '/api/user/login',
        method: 'post',
        data
      })
}