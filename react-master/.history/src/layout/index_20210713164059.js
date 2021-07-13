import React from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Space,Button,Avatar,Dropdown  } from 'antd';
import { Route,Redirect, Link,withRouter} from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import huge from '../assets/images/hege.jfif';

const { Header, Sider, Content } = Layout;

 class Page extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  goToLogin(){
    localStorage.setItem("__config_center_token","");
    console.log(this,this.props,77777)
    this.props.history.push("/")
  }

   menu = (
    <Menu>
      <Menu.Item>
        <a onClick={()=>{this.goToLogin()}}>
         退出登录
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          设置
        </a>
      </Menu.Item>
    </Menu>
  );

  render() {
    console.log(this.props.path)
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {this.props.subMenu}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <div className="header-content">
            <Space size={[20]} wrap>
                <Avatar  src={huge}/>
                <Dropdown overlay={this.menu} placement="bottomLeft">
                  <span className="cursor">胡歌</span>
                </Dropdown>
            </Space>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {<Route  exact path={this.props.path} component={this.props.component}></Route>}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Page)

