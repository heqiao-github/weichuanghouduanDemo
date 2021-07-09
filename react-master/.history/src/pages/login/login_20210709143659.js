import React from 'react';
import './login.scss';
import { Form, Input, Button, Checkbox ,message } from 'antd';
import { connect } from 'react-redux';
import {loginIn} from '../../store/action'

import {logins} from '../../api/index'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      username: 'ddd3333',
      Password:'2222'
    }
  }
  componentDidMount() {
    console.log(this)
  }
  
  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const {login} = this.props;
    const onFinish = values => {

     new Promise((resolve,reject) =>{
      logins({
        username:values.username,
        password:values.password
      }).then(res => {
        debugger
        resolve(res)
      }).catch(error=>{
        reject(error)
      })
     }).then(res => {
        console.log(res,7777777777777);
        if(res.code == 100){
          this.hi
        }
      })

      

        

        
        
    };
    
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="login">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      // loginInfo: state.loginInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login:(data)=>{
      dispatch(loginIn(data));
     
    }
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);