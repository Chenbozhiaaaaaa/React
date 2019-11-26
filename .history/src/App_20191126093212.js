import React, { Component } from 'react';
import './App.css';
// import { HashRouter, Switch, Route } from 'react-router-dom';
// 引入antd

import 'antd/dist/antd.css';

import Admin from './admin'
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
