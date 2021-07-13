import React, { Component, useState } from 'react';
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

  const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };
  


const User = () =>{
    let [key,setKey] = useState('tab1');
    
    const onTabChanges = (key) => {
       console.log(key,contentList[key])
        setKey({ key: [key] });
      };

    return (
        <div>
           <Card
                style={{ width: '100%' }}
                title="Card title"
                tabList={tabList}
                activeTabKey={key}
                onTabChange={key => {
                    console.log(key,8888)
                    onTabChanges(key);
                }}
                >
                {contentList[key]}
            </Card>  
        </div>
    )
}

export default User;