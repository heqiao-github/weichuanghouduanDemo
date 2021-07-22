import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import { useHistory,withRouter } from "react-router-dom";

function NotFound(props) {
  let history = useHistory();
  const goBack = ()=> {
    props.history.go(-1);
  }
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={goBack}>返回主页</Button>}
  />
  )
}

export default withRouter(NotFound);
