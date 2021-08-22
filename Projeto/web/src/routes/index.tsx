import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ViewJob } from '../pages/Job'
import { CreateJob } from '../pages/Job/Create'
import { EditJob } from '../pages/Job/Edit'
import { SignIn } from '../pages/SignIn'
import { Users } from '../pages/Users'
import { CreateUser } from '../pages/Users/Create'
import { EditUser } from '../pages/Users/Edit'


export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={SignIn} />
                <Route path="/users" exact component={Users} />
                <Route path="/users/create" exact component={CreateUser} />
                <Route path="/users/edit" exact component={EditUser} />
                <Route path="/job" exact component={ViewJob} />
                <Route path="/job/create" exact component={CreateJob} />
                <Route path="/job/edit" exact component={EditJob} />
            </Switch>
        </BrowserRouter>
    )
}