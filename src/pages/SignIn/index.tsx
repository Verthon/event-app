import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon
} from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import useAuthUser from '../../hooks/useAuthUser'
import logo from '../../assets/logo/logo-color.svg'
import bg from '../../assets/backgrounds/main-bg-sm.svg'
import { logoGoogle, logoFacebook } from 'ionicons/icons'
import { loginWithSocial } from '../../helpers/login'
import { Styled } from './SignIn.styles'

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const currentUser = useAuthUser()
  return currentUser ? (
    <Redirect to="/account" />
  ) : (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content--color">
        <Styled.Image src={bg} alt="" />
        <Styled.ContentWrapper>
          <Styled.Title>Welcome back!</Styled.Title>
          <Styled.Paragraph>
            Sign in using your Facebook or Google account.
          </Styled.Paragraph>
          <Styled.ButtonWrapper>
            <Styled.FacebookSignButton
              id="facebook-login"
              onClick={() => loginWithSocial('Facebook', history)}
            >
              <IonIcon class="btn-icon" icon={logoFacebook} />
              Sing in with Facebook
            </Styled.FacebookSignButton>
            <Styled.GoogleSignButton
              id="google-login"
              onClick={() => loginWithSocial('Google', history)}
            >
              <IonIcon class="btn-icon" icon={logoGoogle} />
              Sing in with Google
            </Styled.GoogleSignButton>
          </Styled.ButtonWrapper>
        </Styled.ContentWrapper>
      </IonContent>
    </IonPage>
  )
}

export default SignIn
