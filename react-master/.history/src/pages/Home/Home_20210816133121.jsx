import React, { Component, useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { Button,Card } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../../store/action/index';
import Table1 from './table1'
import Table3 from './table3'
import {getTableInfo} from '../../api/index'


const tabList = [
    {
      key: 'tab1',
      tab: '代办',
    },
    {
        key: 'tab3',
        tab: '已完结',
    }
  ];

  const contentList = (data,key) => {
    if(key === "tab1") {
      return  <p><Table1 data={data}></Table1></p>
    } else  {
      return <p><Table3 data={data}></Table3></p>
    } 
  };
  


const User = () =>{
    let [key,setKey] = useState('tab1');
    let [data,setData] = useState('data');
    
   const onTabChanges = (key) => {
        setKey( key );
      }
   const  getData = (data) =>{
        getTableInfo(data).then(res => {
          console.log(res,3333)
          setData(res.data);
        })
    }
    useEffect(()=>{
      getData();
    },[])
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
                {contentList(data,key)}
            </Card>  
        </div>
    )
}

export default User;