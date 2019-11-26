import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                </App>
            </HashRouter>
        )
    }
}
