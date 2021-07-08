import {
  ADD_TODO,
  LOGIN_OUT,
  loginIn,
} from '../action/index';

const initialState = {
  loginInfo: "",
  token: "",
}

const logApi =
const todos = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_TODO':
      newState.token = action.text;
      break;
    case "loginIn" :

  }


  return newState
}
export default todos;