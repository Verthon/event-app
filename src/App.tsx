import React, { useState, Suspense, lazy } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'

import { ReactComponent as DateRangeIcon } from './assets/icons/date_range.svg'
import { ReactComponent as AccountBoxIcon } from './assets/icons/account_box.svg'
import { ReactComponent as LibraryAddIcon } from './assets/icons/library_add.svg'
import { ReactComponent as InfoIcon } from './assets/icons/perm_device_information.svg'
import useAuthUser from './hooks/useAuthUser'
import * as ROUTES from './constants/routes'

import './theme/variables.css'
/* Custom css */
import './styles/index.css'
const Home = lazy(() => import('./pages/Home'))
const Events = lazy(() => import('./pages/Events'))
const Contact = lazy(() => import('./pages/Contact'))
const Account = lazy(() => import('./pages/Account'))
const SignIn = lazy(() => import('./pages/SignIn'))
const CreateEvent = lazy(() => import('./pages/CreateEvent'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const EditEvent = lazy(() => import('./pages/EditEvent'))
const AddedSuccessfully = lazy(() => import('./pages/AddedSuccessfully'))

const App: React.FC<RouteComponentProps> = props => {
  const currentUser = useAuthUser()
  const [currentTab, toggleActiveTabIcon] = useState('Events')
  return (
    <IonApp>
      <Suspense fallback={<div></div>}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.EVENTS} component={Events} exact={true} />
              <Route path={ROUTES.CONTACT} component={Contact} exact={true} />
              <Route
                path={ROUTES.CREATE_EVENT}
                render={props =>
                  currentUser !== null && currentUser !== undefined ? (
                    <CreateEvent {...props} />
                  ) : (
                    <SignIn {...props} />
                  )
                }
                exact={true}
              />
              <Route
                path={ROUTES.ACCOUNT}
                exact={true}
                render={props =>
                  currentUser !== null && currentUser !== undefined ? (
                    <Account {...props} />
                  ) : (
                    <SignIn {...props} />
                  )
                }
              />
              <Route path={ROUTES.SIGN_IN} component={SignIn} exact={true} />
              <Route
                path={ROUTES.EVENT_DETAIL}
                component={EventDetail}
                exact={true}
              />
              <Route
                path={ROUTES.EDIT_EVENT}
                component={EditEvent}
                exact={true}
              />
              <Route
                path={ROUTES.ADDED_SUCCESSFULLY}
                render={props => <AddedSuccessfully {...props} />}
                exact={true}
              />
              <Route
                exact
                path="/"
                render={() => <Redirect to={ROUTES.HOME} />}
              />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton
                tab="events"
                href={ROUTES.EVENTS}
                onClick={() => toggleActiveTabIcon('Events')}
              >
                <DateRangeIcon
                  className={currentTab === 'Events' ? 'active-tab' : null}
                />
                <IonLabel>Events</IonLabel>
              </IonTabButton>

              <IonTabButton
                tab="create-event"
                href={ROUTES.CREATE_EVENT}
                onClick={() => toggleActiveTabIcon('CreateEvents')}
              >
                <LibraryAddIcon
                  className={
                    currentTab === 'CreateEvents' ? 'active-tab' : null
                  }
                />
                <IonLabel>Add event</IonLabel>
              </IonTabButton>

              <IonTabButton
                tab="account"
                href={ROUTES.ACCOUNT}
                onClick={() => toggleActiveTabIcon('Account')}
              >
                <AccountBoxIcon
                  className={currentTab === 'Account' ? 'active-tab' : null}
                />
                <IonLabel>Account</IonLabel>
              </IonTabButton>

              <IonTabButton
                tab="contact"
                href={ROUTES.CONTACT}
                onClick={() => toggleActiveTabIcon('Contact')}
              >
                <InfoIcon
                  className={currentTab === 'Contact' ? 'active-tab' : null}
                />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </Suspense>
    </IonApp>
  )
}

export default App
