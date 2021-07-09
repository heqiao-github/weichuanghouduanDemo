import axios from 'axios'

import {store} from '../store'


// create an axios instance
const service = axios.create({
  headers: {  'Content-Type': 'application/json' },
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
  
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data
   return res;
  },
  error => {
  
    return Promise.reject(error)
  }
)

export default service