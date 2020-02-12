import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent";

import {
  calendar,
  addCircleOutline,
  person,
  informationCircleOutline
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/events" component={Events} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/create-event" component={CreateEvent} exact={true} />
          <Route path="/account" component={Account} exact={true} />
          <Route path="/login" component={SignIn} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="events" href="/events">
            <IonIcon icon={calendar} />
            <IonLabel>Events</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="create-event" href="/create-event">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Add event</IonLabel>
          </IonTabButton>

          <IonTabButton tab="account" href="/login">
            <IonIcon icon={person} />
            <IonLabel>My account</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about" href="/about">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
