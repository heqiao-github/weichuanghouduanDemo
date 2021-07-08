import {
  ADD_TODO,
  LOGIN_OUT,
  loginIn,
} from '../action/index';

const initialState = {
  loginInfo: "",
  token: "",
}

const logApi = (data)=>{
  let promise = new Pr
}
const todos = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_TODO':
      newState.token = action.text;
      break;
    case "loginIn" :
      newState.isLogin = logApi(action.data);
      break
  }


  return newState
}
export default todos;