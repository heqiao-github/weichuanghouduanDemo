import {
  ADD_TODO,
  LOGIN_OUT,
  loginIn,
} from '../action/index';
import {logins} from '../../api/index'

const initialState = {
  loginInfo: "",
  token: "",
}

const logApi = (data) => {
  let promise = new Promise((resolve, reject) => {
    if(data.username == 'admin' && data.password === "123") {
      const promise = logins(data);
      
      promise.then(res=>{
        console.log(res);
        })

      resolve({
        code: 0,
        message: "success",
        value: 1
      })
    }else {
      reject({code: -1, message: "fail"})
    }
  })
  return promise;
}
const todos = (state = initialState, action) => {
  debugger
 
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_TODO':
      newState.token = action.text;
      break;
    case "LOGIN_IN":
       logApi(action.data).then(res=)
      
  }


  return newState
}
export default todos;