
import React, { Component } from "react";
import { Route,Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Menu } from 'antd';
import Page from '../layout';

const { SubMenu } = Menu;


class FrontendAuth extends Component {
  
  subMenu = (routes) => {
    const newRouter = routes?routes.map((route,key) => {
      debugger
      if((route.path !== '/login') && (route.path !== '/404')){
        if(route.children.length) {
          return  <SubMenu key={key}  title={route.name} >
                    {
                      route.children.map((item,key) => {
                        return <Menu.Item key={'sub'+ key}>
                                  <Link to={item.path}>{item.name}</Link>
                              </Menu.Item>
                      })
                    }
                  </SubMenu>
        }else {
          return (
            <Menu.Item key={key}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          )
        }
    }
     }) :"";
  }
 
  
  render() {
    const { location, config } = this.props;
    const { pathname } = location;
    const isLogin = localStorage.getItem('__config_center_token')
    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    let targetRouter = () => {
      let router = {}
      config.map ( v => {
        if(v.children.length) {
          v.children.map(item => {
            if(item.path === pathname) {
              router = {...item}
            }
          })
        }else {
          if(v.path === pathname) {
            router = {...v}
          }
        }
        return true
      })
      return router
    };
    const targetRouterConfig = targetRouter();
    if(targetRouterConfig && !targetRouterConfig.auth && (pathname === '/login' || pathname === '/404')){
      const { component } = targetRouterConfig;
      if(pathname === '/login'&&isLogin) {
        return <Redirect to='/' />
      }else {
        return <Route exact path={pathname} component={component} />
      }
      
    }
    let navleft = (routes) => {
      const subMenu=this.subMenu(config)
      console.log(subMenu,"ssssss")
      return (
        <Page subMenu={subMenu} component={routes.component} path={routes.path} ></Page>
      
      )
    };
    if(isLogin){
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if(pathname === '/login'){
        console.log(pathname);
        return <Redirect to='/' />
      }else{
        // 如果路由合法，就跳转到相应的路由
        if(targetRouterConfig&&targetRouterConfig.path){
          // return <Route path={pathname} component={targetRouterConfig.component} />
          return navleft(targetRouterConfig);
        }else{
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to='/404' />
        }
      }
    }else{
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      // alert('00000')
      if(targetRouterConfig&&targetRouterConfig.path){
        if(targetRouterConfig.auth) {
          return <Redirect to='/login' />
        }else {
          return navleft(targetRouterConfig);
        }
      }else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/404' />
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontendAuth);
