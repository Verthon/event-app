import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/react'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import background from '../assets/backgrounds/login-bg.svg'
import { logoGoogle, logoFacebook } from 'ionicons/icons'
import useAuthUser from '../hooks/useAuthUser'
import {
  doSignInWithGoogle,
  doSignInWithFacebook,
  redirectResultGoogle,
  doSignWithGoogleCredentials,
  redirectResultFacebook,
  doSignWithFacebookCredentials,
} from '../firebase/firebase'

const SignIn: React.FC = (props: any) => {
  const currentUser = useAuthUser()
  const loginWithSocial = (provider: string) => {
    if (provider === 'Google') {
      doSignInWithGoogle()
        .then(() => redirectResultGoogle())
        .then((result: any) => {
          const token = result.credential.accessToken
          doSignWithGoogleCredentials(token)
          props.history.push('/account')
        })
        .catch((error: any) => {
          console.log(
            `Error occurred while signing in using ${provider} provider.`,
            error
          )
          alert(`Error while trying to login with Google ==> ${error.message}`)
        })
    }
    if (provider === 'Facebook') {
      doSignInWithFacebook()
        .then(() => {
          redirectResultGoogle().then((result: any) => {
            const token = result.credential.accessToken
            doSignWithGoogleCredentials(token)
            props.history.push('/account')
          })
        })
        .catch((error: any) =>
          console.log(
            `Error occurred while signing in using ${provider} provider.`,
            error
          )
        )
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content--color">
        <img className="image" src={background} alt="" />
        <ContentWrapper>
          <Title>Welcome back!</Title>
          <Paragraph>Sign in using your Facebook or Google account.</Paragraph>
          <ButtonWrapper>
            <FacebookSignButton onClick={() => loginWithSocial('Facebook')}>
              <IonIcon class="btn-icon" icon={logoFacebook} />
              login
            </FacebookSignButton>
            <GoogleSignButton onClick={() => loginWithSocial('Google')}>
              <IonIcon class="btn-icon" icon={logoGoogle} />
              login
            </GoogleSignButton>
          </ButtonWrapper>
        </ContentWrapper>
      </IonContent>
    </IonPage>
  )
}

const ContentWrapper = styled.div`
  font-family: var(--ion-decorative-font);
  padding: 0 2rem;
`

const Title = styled.h1`
  font-weight: 600;
  color: var(--ion-color-primary);
`

const Paragraph = styled.p`
  color: var(--ion-color--main-text);
  margin: 0.5rem 0;
`

const ButtonWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
`

const FacebookSignButton = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Signika';
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  border-radius: 2px;
  background-color: var(--ion-color-primary);
  color: #ffffff;
`

const GoogleSignButton = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Signika';
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  border-radius: 2px;
  background-color: #ffffff;
  color: var(--ion-color-primary);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
`

export default SignIn
