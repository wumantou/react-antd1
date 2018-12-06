import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import ChatContent from '../pages/Chat'

const routes = (
    <div>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={ChatContent} />
        </Switch>
    </div>
)

export default routes
