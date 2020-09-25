import LoginForm from 'components/Forms/LoginForm'
import HomePage from 'features/HomePage'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginForm} />
        </Switch>

    )
}
