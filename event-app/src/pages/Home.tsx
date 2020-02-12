import {
  IonContent,
  IonPage,
  IonButton
} from '@ionic/react'
import React from 'react'

import homeSVG from '../assets/backgrounds/Rhône.svg'

const Home: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonContent>
        <img className="image" src={homeSVG} alt="" />
        <div className="hero__content ion-padding">
          <h1 className="title">Hello there!</h1>
          <p>
            Eventoo is a perfect place to build, manage and grow your events
          </p>
          <IonButton
            expand="block"
            color="primary"
            onClick={() => props.history.push('/events')}
          >
            Explore
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
