import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import dateRangeIcon from './assets/icons/date_range.svg'
import accountBoxIcon from './assets/icons/account_box.svg'
import libraryAddIcon from './assets/icons/library_add.svg'
import infoIcon from './assets/icons/perm_device_information.svg'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'
import Account from './pages/Account'
import SignIn from './pages/SignIn'
import CreateEvent from './pages/CreateEvent'
import {HOME, EVENTS, ABOUT, CREATE_EVENT, ACCOUNT, SIGN_IN} from './constants/routes'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Custom css */
import './styles/index.css'

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
          <Route exact path="/" render={() => <Redirect to={HOME} />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="events" href={EVENTS}>
            <IonIcon icon={dateRangeIcon} />
            <IonLabel>Events</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="create-event" href={CREATE_EVENT}>
            <IonIcon icon={libraryAddIcon} />
            <IonLabel>Add event</IonLabel>
          </IonTabButton>

          <IonTabButton tab="account" href={ACCOUNT}>
            <IonIcon icon={accountBoxIcon} />
            <IonLabel>My account</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about" href={ABOUT}>
            <IonIcon icon={infoIcon} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
