import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
 

export default function TableTemple(props){


    return (
        <Table 
            columns={props.columns} 
            dataSource={props.data} 
            
        >
        </Table>
    )
}