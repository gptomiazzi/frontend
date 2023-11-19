import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotAuth from './components/NotAuth/NotAuth';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="/notauth" component={NotAuth} />

      <Redirect from="/" to="/login" />
    </Switch>
  );
};

export default Routes;