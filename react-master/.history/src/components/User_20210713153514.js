import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button,Card } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../store/action/index'


const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];

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