import React from 'react'
import TableTemplate from '../../components/Table'

import {activeApply} from '../../api/index'

const columns = [
    {
      title: '姓名',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: '年纪',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: '手机号',
      dataIndex: 'tel',
      key: '1',
      width: 150,
    },{
      title: '身份证号',
      dataIndex: 'idcard',
      key: '2',
      width: 150,
    },
    {
      title: '银行卡号',
      dataIndex: 'bankcard',
      key: '2',
      width: 150,
    },
    {
      title: '银行',
      dataIndex: 'bankname',
      key: '3',
      width: 150,
    },
    {
      title: '患者姓名',
      dataIndex: 'patientName',
      key: '4',
      width: 150,
    },
    {
      title: '患者手机号',
      dataIndex: 'patientPhone',
      key: '5',
      width: 150,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a onClick={()=>{activeApply()}}>审核</a>,
    },
  ];
  
  const data = [];
  


  
  export default function Table1(props){
    
     const {unCheck} = props.data;
     if(unCheck) {
          unCheck = [[unCheck]]
     } else {
       unCheck = []
     }
     console.log(unCheck,777)
      return (
        <div>
           <TableTemplate columns={columns} data={} ></TableTemplate>
        </div>
       
      )
  }