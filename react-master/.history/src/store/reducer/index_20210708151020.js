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
        
      }
      
    }, 3000)
  })
  return promise;
}
const todos = (state = initialState, action) => {
  debugger
  console.log("reduct",action)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_TODO':
      newState.token = action.text;
      break;
    case "LOGIN_IN":
      logApi(action.data);
      break
  }


  return newState
}
export default todos;