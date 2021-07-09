import login from '../pages/login/login';
import request from '../utils/request';


export const login = () =>{
   return  request({
        url: '/vue-admin-template/user/login',
        method: 'post',
        data
      })
}