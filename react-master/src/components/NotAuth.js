import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { useHistory } from "react-router-dom";

function NotFound() {
  let history = useHistory();
  const goBack = ()=> {
    localStorage.clear()
    history.go("/login");
  }
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, 该用户没有权限！！！！."
    extra={<Button type="primary" onClick={goBack}>返回登录页面</Button>}
  />
  )
}

export default NotFound
