import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../store/action/index'

const User = () =>{
    return (
        <div>
           <Card
          style={{ width: '100%' }}
          title="Card title"
          extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>  
        </div>
    )
}

export default User;