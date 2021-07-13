import React from 'react';



import { Table } from '../../components/';

export default function TableTemple(props){


    return (
        <Table 
            columns={props.columns} 
            dataSource={props.data} 
            scroll={props.scroll}
        >
        </Table>
    )
}