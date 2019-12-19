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
import HighTable from './pages/table/highTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import User from './pages/user'
import BikeMap from './pages/map/bikeMap'
import NoMatch from './pages/nomatch'
import Common from './common'
import OrderDetail from './pages/order/detail'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import RichText from './pages/rich/index'
import Permission from './pages/permission'

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                        />
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tab} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={Logins} />
                                    <Route path="/form/register" component={Register} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path="/user" component={User} />
                                    <Route path="/bikeMap" component={BikeMap} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/rich" component={RichText} />
                                    <Route path="/permission" component={Permission} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>

                </App>
            </HashRouter>
        )
    }
}
