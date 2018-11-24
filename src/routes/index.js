import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    </div>
)

export default routes