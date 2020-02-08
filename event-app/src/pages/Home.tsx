import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';
import homeSVG from '../assets/backgrounds/Rhône.svg';

const Home: React.FC = (props: any) => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <div className="hero">
          <div className="hero__content ion-padding">
            <h1 className="title">Hello there!</h1>
            <p>Eventoo is a perfect place to build, manage and grow your events</p>
            <button className="hero__button" onClick={() => props.history.push('/events')}>Explore</button>
          </div>
        </div>
        {/* <img className="image" src={homeSVG} alt="" /> */}
        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/about')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
