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
        <IonIcon src="assets/icons/date_range.svg" />
        <IonLabel>Events</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="create-event">
        <IonIcon src="assets/icons/library_add.svg" />
        <IonLabel>Add events</IonLabel>
      </IonTabButton>

      <IonTabButton tab="account">
        <IonIcon src="assets/icons/account_box.svg" />
        <IonLabel>My account</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon src="assets/icons/perm_device_information.svg" />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;