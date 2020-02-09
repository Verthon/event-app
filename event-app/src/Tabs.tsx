import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Account from "./pages/Account";
import CreateEvent from "./pages/CreateEvent";

export const Tabs: React.FC = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton>
        <IonIcon name="calendar" />
        <IonLabel>Events</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="create-event">
        <IonIcon name="add-circle" />
        <IonLabel>Add event</IonLabel>
      </IonTabButton>

      <IonTabButton tab="account">
        <IonIcon name="person-outline" />
        <IonLabel>My account</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon name="information-circle" />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;