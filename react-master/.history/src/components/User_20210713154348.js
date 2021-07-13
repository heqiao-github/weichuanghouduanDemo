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
  
  const tabListNoTitle = [
    {
      key: 'article',
      tab: 'article',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ];


const User = () =>{
    let [key,setKey] = useState('tab1');
    let [noTitleKey, setTitleky] =  useState("app")

    const onTabChanges = (key, type) => {
        console.log(key, type);
        setKey({ [type]: key });
      };

    return (
        <div>
           <Card
                style={{ width: '100%' }}
                title="Card title"
                tabList={tabList}
                activeTabKey={key}
                onTabChange={key => {
                    //onTabChanges(key, 'key');
                }}
                >
                {contentList[this.state.key]}
            </Card>  
        </div>
    )
}

export default User;