import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import EventCreator from './EventCreator';
import NotFound from './NotFound';
import Event from './Event';
import Events from './Events';
import CentralStore from '../CentralStore';
import * as ROUTES from '../constans/routes';

const Router = () => (
  <CentralStore>
    <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.HOME} component={App}/>
      <Route path={ROUTES.CREATE_EVENT} component={EventCreator} />
      <Route exact path={ROUTES.EVENTS} component={Events} />
      <Route path={ROUTES.EVENT} component={Event} />
      <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  </CentralStore> 
);

export default Router;