import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/pages/Home'

const routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
}

export default routers;
