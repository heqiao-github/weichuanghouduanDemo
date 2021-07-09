import {
  ADD_TODO,
  LOGIN_OUT,
  loginIn,
} from '../action/index';

const initialState = {
  loginInfo: "",
  token: "",
}

const logApi = (data) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      if(data.username == 'admin' && data.password === "123") {
        fetch('/api/user/login').then(json=>json.json())
        resolve({
          code: 0,
          message: "success",
          value: 1
        })
      }else {
        reject({code: -1, message: "fail"})
      }
    }, 3000)
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
      return logApi(action.data);
      
  }


  return newState
}
export default todos;