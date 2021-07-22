import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { useHistory } from "react-router-dom";

function NotFound() {
  let history = useHistory();
  const goBack = ()=> {
    history.push("/");
  }
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={this.goBack}>Back Home</Button>}
  />
  )
}

export default NotFound
