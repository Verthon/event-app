import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Contact</h1>
        <p>Eventoo is a platform, that allows anyone to create, share, find and attend events. From music festivals, conferences and community meetups, to sport events. Our mission is to connect people with passion.</p>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
