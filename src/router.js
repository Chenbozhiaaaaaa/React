import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons.js'
import Modals from './pages/ui/modals.js'
import Loadings from './pages/ui/loadings.js'
import Notice from './pages/ui/notice.js'
import Messages from './pages/ui/messages.js'
import Tab from './pages/ui/tabs.js'
import Gallery from './pages/ui/gallery.js'
import Carousel from './pages/ui/carousel.js'
import Logins from './pages/form/login'
import Register from './pages/form/register'
import BasicTable from './pages/table/basicTable'
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
                                <Route path="/admin/ui/messages" component={Messages} />
                                <Route path="/admin/ui/tabs" component={Tab} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={Carousel} />
                                <Route path="/admin/form/login" component={Logins} />
                                <Route path="/admin/form/register" component={Register} />
                                <Route path="/admin/table/basic" component={BasicTable} />
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
