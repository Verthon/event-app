import React from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import dateRangeIcon from './assets/icons/date_range.svg'
import accountBoxIcon from './assets/icons/account_box.svg'
import libraryAddIcon from './assets/icons/library_add.svg'
import infoIcon from './assets/icons/perm_device_information.svg'
import useAuth from './hooks/useAuth'
import Home from './pages/Home'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Account from './pages/Account'
import SignIn from './pages/SignIn'
import CreateEvent from './pages/CreateEvent'
import EventDetail from './pages/EventDetail'
import ProtectedRoute, { ProtectedRouteProps } from './components/PrivateRoute'
import {
  HOME,
  EVENTS,
  CONTACT,
  CREATE_EVENT,
  ACCOUNT,
  SIGN_IN,
  EVENT_DETAIL,
} from './constants/routes'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

/* Custom css */
import './styles/index.css'

const App: React.FC = () => {
  const auth = useAuth()
  console.log(auth)
  // const defaultProtectedRouteProps: ProtectedRouteProps = {
  //   isAuthenticated: !!sessionContext.isAuthenticated,
  //   authenticationPath: SIGN_IN,
  //   redirectPathOnAuthentication: sessionContext.redirectPathOnAuthentication || '',
  //   setRedirectPathOnAuthentication
  // };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={HOME} component={Home} />
            <Route path={EVENTS} component={Events} exact={true} />
            <Route path={CONTACT} component={Contact} exact={true} />
            <Route path={CREATE_EVENT} component={CreateEvent} exact={true} />
            <ProtectedRoute isAuthenticated={auth.user} authenticationPath={SIGN_IN} restrictedPath={ACCOUNT} component={Account} path={ACCOUNT} exact={true} />
            <Route path={SIGN_IN} component={SignIn} exact={true} />
            <Route path={EVENT_DETAIL} component={EventDetail} exact={true} />
            <Route exact path="/" render={() => <Redirect to={HOME} />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="events" href={EVENTS}>
              <IonIcon icon={dateRangeIcon} />
              <IonLabel>Events</IonLabel>
            </IonTabButton>

            <IonTabButton tab="create-event" href={CREATE_EVENT}>
              <IonIcon icon={libraryAddIcon} />
              <IonLabel>Add event</IonLabel>
            </IonTabButton>

            <IonTabButton tab="account" href={ACCOUNT}>
              <IonIcon icon={accountBoxIcon} />
              <IonLabel>My account</IonLabel>
            </IonTabButton>

            <IonTabButton tab="contact" href={CONTACT}>
              <IonIcon icon={infoIcon} />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
