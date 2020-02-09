import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';

const CreateEvents: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Create an event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h1>Create event page</h1>
      <IonContent />
    </IonPage>
  );
};

export default CreateEvents;
