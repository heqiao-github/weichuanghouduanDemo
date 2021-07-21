import React, { Component } from 'react';
import {Tree} from 'antd';
import config1 from '../../../config/menuconfig1';

export default class RoleTree extends Component {

  constructor(props){
    super(props);
    //因为 父组件即使render 子组件的Willupdate 和 constructor也不会重新执行。
    const {role} = this.props;
    console.log(role,45555)
    this.state = {
      menus:  []  
    }
  }

  componentWillReceiveProps(nextProps) {
    const menus = nextProps && nextProps.role && nextProps.role.menus;
    this.setState({
      menus: menus
    })
  }

   //点击Tree的复选框
  onCheck = (data) => {
    this.setState({
      menus: data
    })
  }

  //获取用户权限
  getMenus = () => {
    return this.state.menus;
  }

  render() {
    const {menus} = this.state; 

    return (
      <Tree
        //节点前添加复选框
        key="key"
        //有复选框
        checkable
        treeData={config1}
        //默认展开全部
        defaultExpandAll={true}
        //复选框发生改变触发
        onCheck={this.onCheck}
        //复选框需要选中的节点有哪些
        defaultCheckedKeys={menus}
      />
    )
  }
}
