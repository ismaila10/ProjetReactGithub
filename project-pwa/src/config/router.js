import React, {useEffect, useState} from 'react';

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';

import Login from '../screens/login';
import Home from '../screens/home';
import PrivateRoute from '../utils/privateRoute'
import NavMenu from '../screens/navMenu';

const Routes = () => {
    const token = localStorage.getItem('token')
    const [isToken, setToken] = useState(token ? token : null); 
    return(
        <Router>
            {isToken ? (
                <NavMenu></NavMenu>
            ) : null}

            <Switch>
                <Route exact path="/" component={Login}></Route>
                <PrivateRoute path="/home" component={Home}></PrivateRoute>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes