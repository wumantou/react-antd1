import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import ChatContent from '../pages/Chat'
import SocketDetail from '../utils/websocket'

const routes = (
    <div>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={ChatContent} />
            <Route exact path="/socket" component={SocketDetail} />
        </Switch>
    </div>
)

export default routes