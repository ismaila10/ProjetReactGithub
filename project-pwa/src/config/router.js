import React from 'react';

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';

import Login from '../screens/login';
import Home from '../screens/home';
import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <PrivateRoute path="/home" component={Home}></PrivateRoute>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes