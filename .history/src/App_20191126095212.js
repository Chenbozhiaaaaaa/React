import React, { Component } from 'react';
import './App.css';
// import { HashRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


export default App;
