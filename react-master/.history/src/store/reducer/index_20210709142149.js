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
    setTimeout(function () {
     
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