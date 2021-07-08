export const ADD_TODO = 'ADD_TODO';
export const LOGIN_OUT = 'LOGIN_OUT';
export const LOGIN_OUT = 'LOGIN_IN';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
};
export const loginOut = (text) => {
  return {
    type: LOGIN_OUT,
    text
  }
}


export const loginIn = (data ) => {
  return {
    type: LOGIN_IN,
    data
  }
}