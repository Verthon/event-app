import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>About Eventoo</h1>
        <p>Eventoo is a platform, that allows anyone to create, share, find and attend events. From music festivals, conferences and community meetups, to sport events. Our mission is to connect people with passion.</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
