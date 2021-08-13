import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Button,Card } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../../store/action/index';
import Table1 from './table1'
import Table2 from './table2'
import {getTableInfo} from '../../api/index'

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

  const contentList = (data,key) => {
    if(key === "tab1") {
      return  <p><Table1 data={data}></Table1></p>
    } else if(key === "tab2") {
      return <p><Table2 data={data}></Table2></p>
    } else {
      return <p>conste3</p>
    }
  };
  


const User = () =>{
    let [key,setKey] = useState('tab1');
    
   const onTabChanges = (key) => {
        setKey( key );
      }
   const  getTableInfo = (data) =>{
        getTableInfo(data).then(res => {

        })
    }

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
                {contentList(null,key)}
            </Card>  
        </div>
    )
}

export default User;