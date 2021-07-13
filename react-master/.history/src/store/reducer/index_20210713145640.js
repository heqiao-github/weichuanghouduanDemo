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


const todos = (state = initialState, action) => {
 
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_TODO':
      newState.token = action.text;
      break;
    case "LOGIN_IN":
       
      
  }


  return newState
}
export default todos;