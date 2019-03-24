import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import EventCreator from './EventCreator';
import NotFound from './NotFound';
import Event from './Event';
import Events from './Events';
import CentralStore from '../CentralStore';

const Router = () => (
  <CentralStore>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/create-event" component={EventCreator} />
      <Route path="/events/:eventId" component={Event} />
      <Route path="/events" component={Events} />
      <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  </CentralStore> 
);

export default Router;