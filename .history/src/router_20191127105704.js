import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.js'
import Modals from './pages/ui/modals.js'
import Loadings from './pages/ui/loadings.js'
import Notice from './pages/ui/notice.js'
import NoMatch from './pages/nomatch'

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route path="/admin/ui/notification" component={Notice} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/admins" component={Admin} />
                </App>
            </HashRouter>
        )
    }
}
