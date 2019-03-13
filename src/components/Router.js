import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import EventCreator from './EventCreator';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/create-event" component={EventCreator} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;