import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import HeaderComponent from './Navigation/index';
import SubBeauty from '../pages/SubBeauty';

export default () => {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beauty" exact component={SubBeauty} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
