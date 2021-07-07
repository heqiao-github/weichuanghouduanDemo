import React, { Component } from 'react';

import { Route, Link } from "react-router-dom";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个News组件'
         };
    }
    componentWillMount(){

        console.log(this.props.routes);
    }
    render() {
        return (
            <div className="user">               
               {this.state.msg}
            </div>
        );
    }
}

export default News;
