export const ADD_TODO = 'ADD_TODO';
export const LOGIN_OUT = 'LOGIN_OUT';

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