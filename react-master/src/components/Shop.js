import React, { Component } from 'react';
import { Button } from "antd"

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个Shop组件'
         };
    }
    componentWillMount(){

        console.log(this.props.routes);
    }
    render() {
        return (
            <div className="user">               
               {this.state.msg}
               <Button>nihao</Button>
            </div>
        );
    }
}

export default Shop;
