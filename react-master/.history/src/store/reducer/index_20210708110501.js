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
  }
  if(action.type === 'ADD_TODO') {
      newState.token = action.text;
  }
  // else if(action.type === 'LOGIN_OUT')
  //   newState.loginInfo = action.text;
  // }
  return newState
}
export default todos;