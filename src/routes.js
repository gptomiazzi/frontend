import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotAuth from './pages/NotAuth/NotAuth';
import Customers from './pages/Customer/Customer';
import Employee from './pages/Employee/Employee';
import Product from './pages/Product/Product';
import Order from './pages/Order/Order';
import Report from './pages/ProdReport/Report';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path='/customer' component={Customers} />
      <Route path='/employee' component={Employee} />
      <Route path='/product' component={Product} />
      <Route path='/order' component={Order} />
      <Route path='/productionReport' component={Report} />

      <Route path="/notauth" component={NotAuth} />

      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default Routes;