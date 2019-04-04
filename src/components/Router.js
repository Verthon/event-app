import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import EventCreator from './EventCreator';
import NotFound from './NotFound';
import Event from './Event';
import Events from './Events';
import * as ROUTES from '../constants/routes';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import withFirebase from './withFirebase';

const Router = (props) => (
    <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.HOME} component={App}/>
      <Route path={ROUTES.CREATE_EVENT} component={EventCreator} />
      <Route exact path={ROUTES.EVENTS} component={Events} />
      <Route path={ROUTES.EVENT} component={Event} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.SIGN_IN} component={Login} />
      <Route component={NotFound}/>
    </Switch>
    </BrowserRouter> 
);

export default Router;