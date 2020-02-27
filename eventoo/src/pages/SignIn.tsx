import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react'
import { logoGoogle, logoFacebook } from 'ionicons/icons'
import React from 'react'
import {withFirebase} from '../firebase';

const SignIn: React.FC = (props: any) => {
  const loginWithSocial = (provider: string) => {
    props.firebase[`doSignInWith${provider}`]()
    props.firebase.auth.onAuthStateChanged((authUser: any) => {
      return authUser ? props.history.push('/account') : null
    })
  }

  console.log('firebase auth', props)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Login to your account</h1>
        <p>Please login with facebook to get access for creating new events</p>
        <IonItem>
          <IonLabel>Login with Facebook account</IonLabel>
          <IonButton onClick={() => loginWithSocial('Facebook')}>
            <IonIcon icon={logoFacebook} />
            login
          </IonButton>
        </IonItem>
        <IonItem>
          <IonLabel>Login with Google account</IonLabel>
          <IonButton onClick={() => loginWithSocial('Google')}>
            <IonIcon icon={logoGoogle} />
            login
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default withFirebase(SignIn)
