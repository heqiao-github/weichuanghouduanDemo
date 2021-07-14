import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Button,Card } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../../store/action/index';
import Table1 from './table1'
import Table2 from './table2'


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
    tab1: <p><Table1></Table1></p>,
    tab2: <p><Table2></Table2></p>,
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