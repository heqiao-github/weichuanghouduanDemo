import React from 'react'
import './App.scss';
import { connect } from 'react-redux';
import RootRouter from './router/router'
class App extends React.Component {
  componentWillMount(){
    console.log("env",process.env.NODE_ENV)
  }   
  render() {
    return (
      <div className="App">
          <RootRouter />
      </div> 
    );
  }
  
}
const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);
