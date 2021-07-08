import {
  ADD_TODO,
  LOGIN_OUT,
  
} from '../action/index';

const initialState = {
  loginInfo: "",
  token: "",
}
const todos = (state=initialState,action) => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_TODO': 
    newState.token = action.text;
    break;
  }
 
  
  return newState
}
export default todos;