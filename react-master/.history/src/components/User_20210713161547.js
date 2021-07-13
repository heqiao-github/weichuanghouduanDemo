import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Button,Card } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../store/action/index'


const tabList = [
    {
      key: 'tab1',
      tab: '代办',
    },
    {
      key: 'tab2',
      tab: '已办',
    },
    {
        key: 'tab3',
        tab: '已完结',
    }
  ];

  const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
    tab3: <p>conste3</p>
  };
  


const User = () =>{
    let [key,setKey] = useState('tab1');
    
   const onTabChanges = (key) => {
        setKey( key );
      };

    return (
        <div>
           <Card
                style={{ width: '100%' }}
                title="Card title"
                tabList={tabList}
                activeTabKey={key}
                hoverable
                onTabChange={key => {
                    onTabChanges(key);
                }}
                >
                {contentList[key]}
            </Card>  
        </div>
    )
}

export default User;