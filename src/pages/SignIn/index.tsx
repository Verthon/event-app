import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
} from '@ionic/react'
import React, { useEffect } from 'react'
import logo from '../../assets/logo/logo-color.svg'
import bg from '../../assets/backgrounds/main-bg-sm.svg'
import { logoGoogle, logoFacebook } from 'ionicons/icons'
import { loginWithSocial } from '../../helpers/login'
import {Styled} from './SignIn.styles'

const SignIn: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content--color">
        <img className="image" src={bg} alt="" />
        <Styled.ContentWrapper>
          <Styled.Title>Welcome back!</Styled.Title>
          <Styled.Paragraph>Sign in using your Facebook or Google account.</Styled.Paragraph>
          <Styled.ButtonWrapper>
            <Styled.FacebookSignButton onClick={() => loginWithSocial('Facebook', props.history)}>
              <IonIcon class="btn-icon" icon={logoFacebook} />
              login
            </Styled.FacebookSignButton>
            <Styled.GoogleSignButton onClick={() => loginWithSocial('Google', props.history)}>
              <IonIcon class="btn-icon" icon={logoGoogle} />
              login
            </Styled.GoogleSignButton>
          </Styled.ButtonWrapper>
        </Styled.ContentWrapper>
      </IonContent>
    </IonPage>
  )
}

export default SignIn