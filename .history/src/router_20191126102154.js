import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Admin} />
                        </Admin>
                    } />
                    <Route path="/admin" component={Admin} />
                </App>
            </HashRouter>
        )
    }
}
