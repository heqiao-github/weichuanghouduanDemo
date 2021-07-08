import React from 'react';
import './login.scss';
import { Form, Input, Button, Checkbox ,message } from 'antd';
import { connect } from 'react-redux';

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
    const onFinish = values => {
      login({
        name:values.name,
        password:values.password
      }).then(res => {
        //用res（服务器）里的数据
        console.log('服务器',res)
        if (res.status === 200) {
          if (res.data.code === 0) {
            // console.log('服务器内用户信息',res.data.data.name)
  
            //设置存储,把用户名存储在key中
            localStorage.setItem("key", res.data.data.name);
            
            //把用户名存储在key中
            // console.log(localStorage.setItem("key", values.name))
            //路由跳转
            localStorage.setItem('__config_center_token','2131');
            this.props.history.push('/');
          } else {
            message.error('服务器错误')
          }
        } else {
          message.info("网络错误")
        }
      }).catch(err => {
        console.log(err)
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
    onFinish (values) {
      console.log(values,333333333333)
      // dispatch(addTodo("12313"));
      // window.location.href = './';
    }
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);