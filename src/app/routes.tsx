
import RecoveryForm from 'components/Forms/RecoveryForm'
import HomePage from 'features/HomePage'
import KabinetPage from 'features/KabinetPage'
import LoginPage from 'features/LoginPage'
import UsersPage from 'features/UsersPage'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route path='/login/recoveryPassword' component={RecoveryForm} />
            <Route path='/cabinet' component={KabinetPage} />
            <Route path='/users' component={UsersPage} />
        </Switch>

    )
}
