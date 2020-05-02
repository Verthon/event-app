import React, { useState } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ReactComponent as DateRangeIcon } from './assets/icons/date_range.svg'
import { ReactComponent as AccountBoxIcon } from './assets/icons/account_box.svg'
import { ReactComponent as LibraryAddIcon } from './assets/icons/library_add.svg'
import { ReactComponent as InfoIcon } from './assets/icons/perm_device_information.svg'
import useAuthUser from './hooks/useAuthUser'
import Home from './pages/Home'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Account from './pages/Account'
import SignIn from './pages/SignIn'
import CreateEvent from './pages/CreateEvent'
import EventDetail from './pages/EventDetail'
import EventCreated from './pages/EventCreated'
import EditEvent from './pages/EditEvent'
import EventChanged from './pages/EventChanged'
import * as ROUTES from './constants/routes'

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

const App: React.FC<RouteComponentProps> = (props) => {
  const currentUser = useAuthUser()
  const [currentTab, toggleActiveTabIcon] = useState('Events')
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.EVENTS} component={Events} exact={true} />
            <Route path={ROUTES.CONTACT} component={Contact} exact={true} />
            <Route path={ROUTES.CREATE_EVENT} render={(props: any) =>
                currentUser !== null && currentUser !== undefined ? (
                  <CreateEvent {...props} />
                ) : (
                  <SignIn {...props} />
                )
              } exact={true} />
            <Route
              path={ROUTES.ACCOUNT}
              exact={true}
              render={(props: any) =>
                currentUser !== null && currentUser !== undefined ? (
                  <Account {...props} />
                ) : (
                  <SignIn {...props} />
                )
              }
            />
            <Route path={ROUTES.SIGN_IN} component={SignIn} exact={true} />
            <Route path={ROUTES.EVENT_DETAIL} component={EventDetail} exact={true} />
            <Route path={ROUTES.EVENT_CREATED} component={EventCreated} exact={true} />
            <Route path={ROUTES.EDIT_EVENT} component={EditEvent} exact={true} />
            <Route path={ROUTES.EVENT_CHANGED} component={EventChanged} exact={true} />
            <Route exact path="/" render={() => <Redirect to={ROUTES.HOME} />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton
              tab="events"
              href={ROUTES.EVENTS}
              onClick={() => toggleActiveTabIcon('Events')}
            >
              <DateRangeIcon className={currentTab === 'Events' ? 'active-tab' : null} />
              <IonLabel>Events</IonLabel>
            </IonTabButton>

            <IonTabButton
              tab="create-event"
              href={ROUTES.CREATE_EVENT}
              onClick={() => toggleActiveTabIcon('CreateEvents')}
            >
              <LibraryAddIcon className={currentTab === 'CreateEvents' ? 'active-tab' : null} />
              <IonLabel>Add event</IonLabel>
            </IonTabButton>

            <IonTabButton
              tab="account"
              href={ROUTES.ACCOUNT}
              onClick={() => toggleActiveTabIcon('Account')}
            >
              <AccountBoxIcon className={currentTab === 'Account' ? 'active-tab' : null} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>

            <IonTabButton
              tab="contact"
              href={ROUTES.CONTACT}
              onClick={() => toggleActiveTabIcon('Contact')}
            >
              <InfoIcon className={currentTab === 'Contact' ? 'active-tab' : null} />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
