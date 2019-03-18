import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import EventCreator from './EventCreator';
import NotFound from './NotFound';
import Event from './Event';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/create-event" component={EventCreator} />
      <Route path="/event/:eventId" component={Event}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;