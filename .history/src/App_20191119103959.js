import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
// 引入antd
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import Admin from './admin'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={Admin} />   
        </Switch>
      </HashRouter>
    )
  }
}


export default App;
