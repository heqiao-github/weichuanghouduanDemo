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
    },
    {
      title: '银行卡号',
      dataIndex: 'idcard',
      key: '2',
      width: 150,
    },
    {
      title: '银行预留手机号',
      dataIndex: 'bankphone',
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
      dataIndex: 'patientName',
      key: '5',
      width: 150,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a onClick={()=>{activeApply()}}>审核</a>,
    },
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }


  
  export default function Table1(){
      return (
        <TableTemplate columns={columns} data={data} ></TableTemplate>
      )
  }