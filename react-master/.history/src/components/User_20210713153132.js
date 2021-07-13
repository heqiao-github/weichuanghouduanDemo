import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from  "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loginOut,addTodo } from '../store/action/index'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: ""
        };
        this.loginBtnBindThis = this.loginBtnBindThis.bind(this);
    }
   

    render() {
        return (
            <div className="user">               

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // loginInfo: state.loginInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginBtnEs6() {
            dispatch(addTodo(""))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);
